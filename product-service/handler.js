'use strict';

const books = require('./database/books');

module.exports.getBooks = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(books)
  };
};

module.exports.getBookById = async (event) => {
    const id = event.pathParameters.bookId;
    const book = books.find(b => b.id === id);
    return {
        statusCode: 200,
        body: JSON.stringify(book)
    };
};
