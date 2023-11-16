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
    try {
        const listOfBooks = await Book.findAll();
        res.status(200).json(listOfBooks);
    } catch (error) {
        res.status(501).json({
            message: error.message,
            error: error
        })
    }

}

async function updatePublisher (req,res) {

}

async function deleteBook (req,res) {

}

module.exports = {addBook,listAllBooks,updatePublisher,deleteBook};