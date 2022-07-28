const express = require("express");
const {registerUser, loginUser, allUsers} = require("../controllers/userController");
const { checkProtectWithBearer } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(checkProtectWithBearer,allUsers)  //get all users
router.route("/").post(registerUser)  // register user
router.post("/login", loginUser)   // login user

module.exports = router;