const jwt = require("jsonwebtoken");
const db = require("../db/db");
require("dotenv").config();

const auth = async (req, res, next) => {
  try {
    
    if (!req.cookies.token) {
      
      res.status(401).send("You are not authorized.");
    }
    const token = req.cookies.token;

    const check = await db("token_blacklist").where({ token_id: token });

    if (check.length <= 0) {
      jwt.verify(token, process.env.SECRET, (err, info) => {
        if (err) {
          res.status(401).send("You are not authorized.");
        }

        req.user = info.data;

        next();
      });
    } else {
      res.status(401).send("You are not authorized.");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
