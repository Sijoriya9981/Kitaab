import Book from "../model/book_model.js"

export const getBook = async (req, res, next) => {
    await Book.find()
        .then(result => {
            res.status(202).json({
                book: result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
}

