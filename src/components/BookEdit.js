import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookEdit = ({ setShowEdit, book }) => {
  const [title, setTitle] = useState(book.title);
  const { updateBook } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBook(book.id, title);
    setShowEdit(false);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
