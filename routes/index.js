var express = require("express");
var router = express.Router();
const userRouter = require("./user.js");
const todosRouter = require("./todos.js");

//Router setup

router.use("/user", userRouter);
router.use("/todos", todosRouter);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("TEST");
});

module.exports = router;
