const Book = require("./bookmodel");

async function addBook(req, res) {
    try {
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher,
            genre: req.body.genre
        }

        const dbresponse = await Book.create(newBook);
    
        res.status(201).json({
            message: "Book added to table",
            book: dbresponse
        })
    } catch (error) {
        res.status(501).json({
            message: error.message,
            error: error
        })
    }
}

async function listAllBooks (req,res){

}

async function updatePublisher (req,res) {

}

async function deleteBook (req,res) {

}

module.exports = {addBook,listAllBooks,updatePublisher,deleteBook};