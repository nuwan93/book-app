import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

const App = () => {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const id = "id" + Math.random().toString(16).slice(2);
    const updatedBooks = [...books, { id, title }];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const updateBook = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onUpdate={updateBook} />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
};

export default App;
