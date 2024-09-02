const {Schema,model} = require("mongoose");

const contectschema = new Schema({
    username: {
        type : String,
        required : true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
})

const Contact = model("Contact", contectschema);

module.exports = Contact;