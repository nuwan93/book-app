import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

const BookShow = ({ book }) => {
  const { deleteBookById } = useBooksContext();

  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/200/300`} />
      {showEdit ? (
        <BookEdit book={book} setShowEdit={setShowEdit} />
      ) : (
        book.title
      )}
      <div className="action">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
