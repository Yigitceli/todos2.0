const router = require("express").Router();
const upload = require("../multer.js");
const db = require("../db/db.js");
const auth = require("../middlewares/auth.js");
const { UPLOAD_IMAGE, GET_IMAGE } = require("../controllers/userControllers.js");

router.get("/image", auth, GET_IMAGE);
router.get("/me", auth, async (req, res, next) => {
  res.send(req.user);
});


router.put("/me/image", auth, upload.single("image"), UPLOAD_IMAGE);

module.exports = router;
