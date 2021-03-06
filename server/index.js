const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const config = require("./config");
const routes = require("../routes");
const compression = require("compression");
const bodyParser = require("body-parser");

//Auth
const authService = require("./services/auth");

//Routes
const portfolioRoutes = require("./routes/portfolio");
const blogRoutes = require("./routes/blog");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);

//Database integration
mongoose
  .connect(config.DB_URI, { useNewUrlParser: true })
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.error(err));

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
    server.use(compression());
    server.use(bodyParser.json());

    //Portfolio Route
    server.use("/api/v1/portfolios", portfolioRoutes);
    //BlogRoute
    server.use("/api/v1/blogs", blogRoutes);

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

    const PORT = process.env.PORT || 3000;

    server.use(handle).listen(PORT, (err) => {
      if (err) throw err;
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
