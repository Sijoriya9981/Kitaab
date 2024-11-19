import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import cors from "cors";

import BookRoutes from './API/routes/book_routes.js'
import SignupRoutes from './API/routes/user_routes.js'
import contactRoutes from './API/routes/contact_routes.js'
const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(cors({
    origin: '',
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json())

//connect with database
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('error', err => {
    console.log("Not Connect With Database")
})
mongoose.connection.on('connected', result => {
    console.log(" Connect With Database")
})



//Routes
app.use('/book', BookRoutes)
app.use('/user', SignupRoutes)
app.use('/contact', contactRoutes)


app.listen(port || 3000, () => {
    console.log(`Server is running  on port ${port}`)
})
