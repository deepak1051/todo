import React, { useState } from 'react';
import BookEdit from './BookEdit';
const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleClickEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book._id}/300/200`} alt="books" />
      {!showEdit && <h3>{book.task}</h3>}

      {showEdit && (
        <BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit} />
      )}
      <div className="actions">
        <button className="edit" onClick={handleClickEdit}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(book._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
