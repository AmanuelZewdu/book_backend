const db = require("../models");
const Book = db.books;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const book = new Book({
    title: req.body.title,
    publisher: req.body.publisher,
    isbn: req.body.ISBN,
    quantity: req.body.quantity,
    shelfNumber: req.body.shelfNumber,
  });

  // Save Books in the database
  book
    .save(book)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while saving the book.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Book.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Books.",
      });
    });
};
