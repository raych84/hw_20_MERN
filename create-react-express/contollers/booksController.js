const catchAsync = require('../utils/catchAsync');
const Book = require('../models/book');

// const db = require("../models");
// const { Book } = require('../models');


// const { findOneAndUpdate } = require('../models/book');

// // Defining methods for the booksController
// module.exports = {
//   findAll: function(req, res) {
//     db.Book
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.Book
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.Book
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.Book
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Book
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };

const sendData = (res, data) => res.status(200).json({
  status: 'success',
  data
});


exports.findAll = catchAsync(async (req, res) => {

  console.log('Get all books 😭');

  const docs = await Book.find();

  sendData(res, docs);

});


exports.findOne = catchAsync(async (req, res) => {

  if (!req.params.id) return res.status(400).json({
    status: 'fail',
    message: 'No ID was specified'
  })

  const doc = await Book.findById(req.params.id);

  sendData(res, doc);

})

exports.create = catchAsync(async (req, res) => {

  console.log(req.body);
  const doc = await Book.create(req.body);

  sendData(res, doc);
});

exports.update = catchAsync(async (req, res) => {

  if (!req.params.id) return res.status(400).json({
    status: 'fail',
    message: 'No ID was specified'
  })


  const doc = await Book.findById(req.params.id, req.body);

  sendData(res, doc);

});

exports.remove = catchAsync(async (req, res) => {

  if (!req.params.id) return res.status(400).json({
    status: 'fail',
    message: 'No ID was specified'
  })

  await Book.findByIdAndDelete(req.params.id);

  sendData(res, null);

})