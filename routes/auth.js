const express = require("express");
const bcrpyt = require("bcrypt");
const router = express.Router();
const db = require("../db/db.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = require('../auth/auth.js');
const {REGISTER, LOGIN} = require('../controllers/authControllers.js');

// AUTH SECTION
router.post("/register", REGISTER);

router.post("/login", LOGIN);

router.get('/test', auth, (req, res, next) => {
  res.send(req.user);
})

module.exports = router;
