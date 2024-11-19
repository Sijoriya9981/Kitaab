import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    _id: new mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message:
    {
        type: String,
        required: true,
    }
})

const contact = mongoose.model('Contact', contactSchema);
export default contact;