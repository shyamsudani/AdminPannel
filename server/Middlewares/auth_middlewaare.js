const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authmiddleware = async (req,res,next) => {
    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    
    // Asuming token is format "Bearer" <jwtToken> , removing the "Bearer `prefix"
    const jwtToken = token.replace("Bearer", "").trim();
    // console.log("token from auth middleware", jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        const userData = await User.findOne({email : isVerified.email}).select({ password: 0,});
        // console.log( userData);

        req.user = userData;
        req.token = token
        req.userID = userData._id

        next()
    } catch (error) {
        return res.status(401).json({message: "Invelid token"});
    }
}

module.exports = authmiddleware;