const Contect = require("../models/contect-model");

const contect = async (req,res) => {
    try {
        const response = req.body;
        await Contect.create(response);
        return res.status(200).json({message: "message send successfully"});
    } catch (error) {
        return res.status(500).json({message: "message are not delivered"})
    }
}

module.exports = contect;