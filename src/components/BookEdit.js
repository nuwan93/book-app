import { useState } from "react";

const BookEdit = ({ book, onUpdate }) => {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(book.id, title);
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
