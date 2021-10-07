var express = require("express");
var router = express.Router();
const userRouter = require("./user.js");

//Router setup

router.use("/user", userRouter);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("TEST");
});

module.exports = router;
