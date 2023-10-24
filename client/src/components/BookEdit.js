import React, { useState } from 'react';

const BookEdit = ({ onEdit, book, onSubmit }) => {
  const [title, setTitle] = useState(book.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book._id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        className="input"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
