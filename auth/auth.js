const jwt = require("jsonwebtoken");
const db = require("../db/db");
require("dotenv").config();

const auth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      res.send("Security header is necessary.");
    }
    const token = req.headers.authorization.split(" ")[1];
    const check = await db("token_blacklist").where({ token_id: token });
    if (check.length <= 0) {
      jwt.verify(token, process.env.SECRET, (err, info) => {
        if (err) {
          res.send("You are not authorized.");
        }
        req.user = info.data;
        next();
      });
    } else {
      
      res.send("You are not authorized.");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
