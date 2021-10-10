const router = require("express").Router();
const db = require("../db/db.js");
const auth = require("../middlewares/auth.js");

//GET
router.get("/categories", auth, async (req, res, next) => {
  const categories = await db("categories").where({ user_id: req.user.id });
  res.send(categories);
});

router.get("/:categoryId", auth, async (req, res, next) => {
  const todos = await db
    .select(
      "todos.todo_title",
      "todos.description",
      "categories.name",
      "todos.id"
    )
    .from("todos")
    .leftJoin("categories", "todos.category_id", "categories.id")
    .where({ category_id: req.params.categoryId });
  res.send(todos);
});

// POST

router.post("/:categoryId", auth, async (req, res, next) => {
  const response = await db("todos").insert(req.body, ["*"]);
  res.send(response);
});

router.post("/categories", auth, async (req, res, next) => {
  const { categoryName } = req.body;
  const categories = await db("categories").insert(
    {
      name: categoryName,
      user_id: req.user.id,
    },
    ["*"]
  );
  res.send(categories);
});

module.exports = router;
