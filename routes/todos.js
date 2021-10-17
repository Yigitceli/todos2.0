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
      "todos.id",
      "todos.is_complete"
    )
    .from("todos")
    .leftJoin("categories", "todos.category_id", "categories.id")
    .leftJoin("users", "users.id", "categories.user_id")
    .where({ category_id: req.params.categoryId });
  res.send(todos);
});

// POST
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

router.post("/:categoryId", auth, async (req, res, next) => {  
  const response = await db("todos").insert(req.body, ["*"]);  
  res.send(response);
});

//PUT

router.put("/:todoId", auth, async (req, res, next) => {
  try {
    const {isComplete} = req.body;
    const { categoryId, todoId } = req.params;
    const todo = await db("todos")
      .where({ id: todoId })
      .update({ is_complete: isComplete }, ["*"]);

    res.send(todo);
  } catch (error) {
    res.send("Error");
  }
});
module.exports = router;
