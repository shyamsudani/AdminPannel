const express = require("express");
const router = express.Router();
const { home , register , login, user} = require("../controllers/auth-controllers");
const { sigupSchema, siginSchema } = require("../authValidetor/authValidation");
const validate = require("../Middlewares/validate-middleware");
const authmiddleware = require("../Middlewares/auth_middlewaare")

// Middleware to authenticate users

// home page router
router.route("/").get(home);

// register page router
router.route("/register").post(validate(sigupSchema),register);

// login page router
router.route("/login").post(validate(siginSchema),login);

//user page router
router.route("/user").get(authmiddleware,user);

module.exports = router;