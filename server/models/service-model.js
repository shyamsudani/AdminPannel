const {Schema,model,mongoose}= require("mongoose");

const services = new Schema({
    service: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
});

const Services = mongoose.model("Service", services);

module.exports = Services;