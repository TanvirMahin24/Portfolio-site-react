const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const config = require("../config");

const NAMESPACE = config.NAMESPACE;
//Auth MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 100,
    jwksUri: "https://tm24.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "6ZXORIFR1F4iiw5QhR2wZxcYjiUEbd6F",
  issuer: "https://tm24.us.auth0.com/",
  algorithms: ["RS256"],
});

exports.checkRole = (role) => (req, res, next) => {
  const user = req.user;

  if (user && user[NAMESPACE + "/role"] && user[NAMESPACE + "/role"] === role) {
    next();
  } else {
    return res.status(401).send({
      title: "Not Authorized",
      detail: "You are not authorized to access this data",
    });
  }
};
