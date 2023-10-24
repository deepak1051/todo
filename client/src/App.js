import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const URL = 'http://localhost:5000/api/tasks';

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get(URL);
    setBooks(res.data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  const handleCreate = async (title) => {
    const response = await axios.post(URL, {
      task: title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`${URL}/${id}`);
    const updatedBooks = books.filter((book) => book._id !== id);

    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const res = await axios.put(`${URL}/${id}`, {
      task: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book._id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={handleCreate} />
    </div>
  );
};

export default App;
