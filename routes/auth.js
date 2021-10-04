const express = require("express");
const bcrpyt = require("bcrypt");
const router = express.Router();
const db = require("../db/db.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = require("../auth/auth.js");
const {
  REGISTER,
  LOGIN,
  LOGOUT,
  ISAUTHENTICATED,
} = require("../controllers/authControllers.js");

// AUTH SECTION

//POST
router.post("/register", REGISTER);

router.post("/login", LOGIN);

//GET

router.get("/logout", auth, LOGOUT);

router.get("/is-authenticated", auth, ISAUTHENTICATED);

module.exports = router;
