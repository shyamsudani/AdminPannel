const express = require("express");
const router = express.Router();
const {users, contects, deleteusers, getuserid, updateusers, deletecontact} = require("../controllers/admin-controller")
const authmiddleware = require("../Middlewares/auth_middlewaare")
const adminmiddleware = require("../Middlewares/admin-middleware");

router.route("/users").get(authmiddleware,adminmiddleware,users);

router.route("/users/:id").get(authmiddleware,adminmiddleware,getuserid);

router.route("/users/update/:id").patch(authmiddleware,adminmiddleware,updateusers)

router.route("/users/delete/:id").delete(authmiddleware,adminmiddleware,deleteusers)

router.route("/contects").get(contects)

router.route("/contects/delete/:id").delete(authmiddleware,adminmiddleware,deletecontact);

module.exports = router;