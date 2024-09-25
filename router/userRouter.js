const express = require("express");
const { renderHome, addUser } = require("../controller/userController");
const router = express.Router();

router.get("/", renderHome);
router.post("/add", addUser);

module.exports = router;
