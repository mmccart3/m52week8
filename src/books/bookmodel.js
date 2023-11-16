const {DataTypes} = require("sequelize");
const SQLconnection = require("../db/connection");


const Book = SQLconnection.define("Book", {
    title : {
        type: DataTypes.STRING,
        allowNull : false,
        unique: true
    },
    author: {
        type: DataTypes.STRING
    },
    publisher: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    }
});

module.exports = Book;