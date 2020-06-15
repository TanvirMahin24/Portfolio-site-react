const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const routes = require("../routes");

const authService = require("./services/auth");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);

//Database integration

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://mahin:1234@portfoliodb-85hvf.mongodb.net/portfolioDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("DB connected");
  client.close();
});

const secretData = [
  {
    title: "SecretData 1",
    description: "Plans how to build spaceship",
  },
  {
    title: "SecretData 2",
    description: "My secret passwords",
  },
];

app
  .prepare()
  .then(() => {
    const server = express();

    //Secret endpoient
    server.get("/api/v1/secret", authService.checkJWT, (req, res) => {
      data = {
        name: "Project",
      };
      res.json(data);
    });

    //Siteowner
    server.get(
      "/api/v1/onlysiteowner",
      authService.checkJWT,
      authService.checkRole("siteOwner"),
      (req, res) => {
        return res.json(secretData);
      }
    );

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(function (err, req, res, next) {
      if (err.name === "UnauthorizedError") {
        res
          .status(401)
          .send({ title: "Unauthorized", detail: "Unauthorized Access!" });
      }
    });

    server.use(handle).listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
