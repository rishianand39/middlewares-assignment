const express = require('express');
const app = express()


app.get("/books", allBooks, (req, res) => {
    res.send({ allbooks: "/books" })

})
app.get("/book/GameOfThrones", singleBook, (req, res) => {
    return res.send({ route: "/book/GameOfThrones", bookName: req.bookName })

})
app.get("/book/HarryPotter", singleBook, (req, res) => {
    return res.send({ route: "/book/HarryPotter", bookName: req.bookName })

})

app.get("/book/rishiautobiography", singleBook, (req, res) => {
    return res.send({ route: "/book/rishiautobiography", bookName: req.bookName })

})

function singleBook(req, res, next) {
    if (req.path == "/book/GameOfThrones") {
        req.bookName = "GameOfThrones"
    } else if (req.path == "/book/rishiautobiography") {
        req.bookName = "rishiautobiography"
    } else if (req.path == "/book/HarryPotter") {
        req.bookName = "HarryPotter"
    }
    next();
}


function allBooks(req, res, next) {
    console.log("Fetching all books")
    next();
}


app.listen('5400', function() {
    console.log('listening on port 5000')
})