const Services = require("../models/service-model");

const service = async (req, res) => {
    try {
        const response = await Services.find();
        
        if (!response) return res.status(404).json({ message: "No services found" });
        res.status(200).json({msg: response});
    } catch (error) {
        console.log(error);
    }
}


module.exports = service;