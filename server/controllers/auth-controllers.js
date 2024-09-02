const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// home page logic
const home = async (req,res) => {
    try{
        res.status(201).json("welcome to home page");
    }
    catch (error) {
        console.error(error);
        res.status(500).json('Server Error');
    }
}


// register page logic
const register = async (req,res,next) => {
    try{

        console.log(req.body);
        const {username , email , phone , password} = req.body;

        const userExite = await User.findOne({email})

        if(userExite){
            return res.status(400).json({message: "User already exists"});
        }

        // hash the password
        // const saltRound = 10;
        // {const hash_password = await bcrypt.hash(password, saltRound);}

        // create new user
        const userCreated = await User.create({username , email, phone, password});

        res.status(200).json( {msg: "registretion sucessful", token : await userCreated.generateToken(), userid: userCreated._id.toString(),});
    }
    catch (error){
        console.error(error);
        // res.status(500).json('501 Server Error');
        next(error)
    }
}

// login page logic

const login = async (req, res,next) => {
    try {
        console.log(req.body);
        const { email , password } = req.body;

        const userExite = await User.findOne({ email });

        if(!userExite){
            return res.status(404).json({ message: "Invalid Credentials" });

        }

        const user = await bcrypt.compare(password, userExite.password);

        if(user){
            res.status(200).json( {msg: "Login sucessful", token : await userExite.generateToken(), userid: userExite._id.toString(),});
        }
        else{
            res.status(401).json("Invalid email or password");
        }


    } catch (error) {
        console.error(error);
        // res.status(500).json('501 Server Error');
        next(error);
    }
}

// user page logic

const user = async ( req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log(error);
    }
}

module.exports = { home , register , login, user};