const express = require("express");
const router = express.Router();
const {registerUser, loginUser} = require("../controllers/userController");

router.route("/").post(registerUser)   // register user
router.post("/login", loginUser)   // login user

module.exports = router;