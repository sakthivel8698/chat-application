const express = require("express");
const { registerUser, login, allUsers } = require("../controllers/userControllers");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(login);
router.route("/allusers").get(allUsers);
// router.route('/login').

module.exports = { router };
