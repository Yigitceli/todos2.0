const bcrpyt = require("bcrypt");
const db = require("../db/db.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();


//REGISTER *****************

const REGISTER = async (req, res, next) => {
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
};

//LOGIN **********************

const LOGIN = async (req, res, next) => {
  const { username, password } = req.body;
  let user;
  if (username && password) {
    user = await db("users").where({ username });

    if (user.length !== 0) {
      if (bcrpyt.compareSync(password, user[0].password)) {
        const token = await jwt.sign(
          { data: { username, id: user[0].id, isAdmin: user[0].isAdmin} },
          process.env.SECRET,
          { expiresIn: "1h" }
        );

        res.cookie("token", token, { httpOnly: true });    
          
        const { password, ...info } = user[0];
        
        res.send(info);
      } else {
        res.status(401).send("Password is incorrect!");
      }
    } else {
      res.status(401).send("Username does not exist!");
    }
  } else {
    res.status(401).send("Please fill inputs correctly.");
  }
};

// LOGOUT **********

const LOGOUT = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    res.cookie("token", "", { maxAge: 1 });
    await db("token_blacklist").insert({ token_id: token });
    res.status(200).send(true);
  } catch (error) {
    res.send(false);
  }
};

//ISAUTHENTICATED ***********

const ISAUTHENTICATED = (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send(false);
  }
};

module.exports = {
  REGISTER,
  LOGIN,
  LOGOUT,
  ISAUTHENTICATED,
};
