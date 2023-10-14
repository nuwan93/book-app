import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id, title) => {
    onUpdate(id, title);
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/200/300`} />
      {showEdit ? <BookEdit book={book} onUpdate={handleSubmit} /> : book.title}
      <div className="action">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
