require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5002;
const Book = require("./books/bookmodel");
const bookRouter = require("./routes/bookroutes");

function syncTables() {
    Book.sync({alter: true});
}

//MIDDLEWARE SETUP
app.use(cors());
//allows us to connect a React Front End later
app.use(express.json());

app.use(bookRouter);

app.get("/health", (req,res) => res.status(200).json({message : "Server is alive"}));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    syncTables();
});