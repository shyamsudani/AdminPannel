// const authmiddleware = require("../Middlewares/auth_middlewaare");
// const User = require("../models/user-model");

const adminmiddleware = async (req,res,next) => {
    try {
        const adminRole = req.user.isAdmin;

        if(!adminRole){
            return res.status(402).json({message : "access denite beause you are not admin"});
        }
        // res.status(200).json({msg: adminRole});
        next();
    } catch (error) {
        next(error)
    }
}

module.exports = adminmiddleware;