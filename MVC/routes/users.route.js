const express = require("express");
const { getUser, saveUser } = require("../controllers/users.controller");
const router = express.Router();


router.get("/", getUser);
router.post("/", saveUser);

module.exports = router;