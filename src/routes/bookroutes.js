const {Router} = require("express");
const bookRouter = Router();
const {addBook, listAllBooks, updatePublisher, deleteBook} = require("../books/bookcontrollers");


//ROUTES
bookRouter.post("/addbook",addBook);
bookRouter.get("/listallbooks", listAllBooks);
bookRouter.put("/updatepublisher", updatePublisher);
bookRouter.delete("/deletebook", deleteBook);


module.exports = bookRouter;