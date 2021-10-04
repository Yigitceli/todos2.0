const express = require("express");
const bcrpyt = require("bcrypt");
const router = express.Router();
const db = require("../db/db.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = require('../auth/auth.js');

/* GET users listing. */
router.post("/register", async function (req, res, next) {
  const { username, password } = req.body;
  let error = [];
  var strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*._-])(?=.{8,})"
  );

  (!username || !password) &&
    error.push("Username and password can`t be empty");
  username.length < 8 &&
    error.push("Username must contain 8 or more character!");
  password.length < 8 &&
    error.push("Password must contain 8 or more character!");
  !strongRegex.test(password) && error.push("Password is weak");
  const user = await db("users").where({ username: username });

  user.length !== 0 && error.push("Username is already taken.");

  error.length === 0
    ? db("users")
        .insert(
          {
            username: username,
            password: bcrpyt.hashSync(password, 10),
          },
          ["id"]
        )
        .then((id) => res.send(id))
    : res.send(error);
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  let user;
  if (username && password) {
    user = await db("users").where({ username });
    if (user.length !== 0) {
      if (bcrpyt.compareSync(password, user[0].password)) {
        const token = await jwt.sign(
          { data: { username, id: user[0].id, isAdmin: user[0].isAdmin } },
          process.env.SECRET,
          { expiresIn: "1h" }
        );

        res.cookie("token", token, { httpOnly: true });

        res.sendStatus(200)
      } else {
        res.send("Password is incorrect!");
      }
    } else {
      res.send("Username does not exist!");
    }
  } else {
    res.send("Please fill inputs correctly.");
  }
});

router.get('/test', auth, (req, res, next) => {
  res.send(req.user);
})

module.exports = router;
