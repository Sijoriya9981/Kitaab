import mongoose from "mongoose";
import contact from "../model/contact_modal.js";

export const getcontactmesg = async (req, res) => {

    try {
        const { name, email, message } = req.body;
        const newmessage = new contact({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            email: email,
            message: message
        })
        await newmessage.save()
        res.status(201).json({
            msg: "Successfully Submit",

        })
    }
    catch (err) {
        console.log(err.message)
    }
}