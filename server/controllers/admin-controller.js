const User = require("../models/user-model");
const Contact = require("../models/contect-model");


const users = async (req, res, next) => {
    try {
        const userdata = await User.find({}, { password: 0 });

        if (!userdata || userdata.length === 0) {
            return res.status(404).json({ message: "No users found" })
        }
        return res.status(400).json(userdata)
    } catch (error) {
        next(error);
    }
}

const getuserid = async (req, res, next) => {
    try {
        const id = req.params.id;

        const data = await User.findOne({ _id: id });

        if (!data) {
            return res.status(404).json({ message: "User not found" })
        }

        return res.status(200).json(data);
    } catch (error) {
        next(error)
    }
}

const updateusers = async (req, res, next) => {
    try {
        const id = req.params.id;
        const userupadateData = req.body;

        const Userupadated = await User.updateOne(
            { _id: id },
            {
                $set: userupadateData,
            }
        );
        return res.status(200).json(Userupadated);
    } catch (error) {
        next(error);
    }
}

const deleteusers = async (req, res, next) => {
    try {
        const id = req.params.id;

        const result = await User.deleteOne({ _id: id });

        if (result.deletedcount === 0) {
            return res.status(404).json({ message: "User not found" })
        }

        return res.status(204).json({ message: "user deleted successfully" })

    } catch (error) {
        next(error)
    }
}

const contects = async (req, res, next) => {
    try {
        const contectdata = await Contact.find();

        if (!contectdata) {
            return res.status(404).json({ message: "No contacts found" })
        }
        return res.status(200).json(contectdata)
    } catch (error) {
        next(error)
    }
}

const deletecontact = async (req,res,next) => {

    try{
    const id = req.params.id;

    const datadelete = await Contact.deleteOne({_id:id});

    if(datadelete.deletedcount === 0 ){

        return res.status(404).json({ message: "Contact not found" });
    }
    
    return res.status(200).json({message : "Contact deleted successfully"});
    
}   catch(error){
    next(error);
}
}

module.exports = { users, contects, deleteusers, getuserid, updateusers, deletecontact };