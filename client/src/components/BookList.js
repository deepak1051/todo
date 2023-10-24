import React from 'react';

import BookShow from './BookShow';
const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow
          book={book}
          onDelete={onDelete}
          onEdit={onEdit}
          key={book._id}
        />
      ))}
    </div>
  );
};

export default BookList;
