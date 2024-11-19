import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    title: String,
    description: String,
    price: Number,
    category: String,
    image: String
})
const Book = mongoose.model('Book', bookSchema)
export default Book;


