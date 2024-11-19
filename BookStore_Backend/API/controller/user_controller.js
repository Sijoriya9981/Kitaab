import User from '../model/user_model.js'
import mongoose from 'mongoose'
import bcryptjs from "bcryptjs";
export const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const ispresent = await User.findOne({ email })
        if (ispresent) {
            return res.status(400).json({
                msg: "User Already Exist"
            })
        }

        const haspassword = await bcryptjs.hash(req.body.password, 10)
        const newuser = new User({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            email: email,
            password: haspassword

        })
        await newuser.save()
        res.status(201).json({
            msg: "User Registered Successfully",
            result: {
                _id: newuser._id,
                name: newuser.name,
                email: newuser.email
            }
        })


    }
    catch (err) {
        console.log(err.message)
    }

}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        const ismatch = await bcryptjs.compare(password, user.password)

        if (!user || !ismatch) {
            return res.status(400).json({
                message: "Invalid username or password"
            })
        }

        else {
            res.status(202).json({
                message: "Login Successfully",
                result: {
                    _id: user._id,
                    name: user.name,
                    email: user.email


                }
            })
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "An error occurred. Please try again later.",
        });
    }
}