const router = require("express").Router();
const imageUpload = require("../middlewares/multer.js");

router.get("/:userId", (req, res, next) => {
    
});

router.post(
  "/:userId/upload",
  imageUpload.single("image"),
  (req, res, next) => {}
);

module.exports = router;
