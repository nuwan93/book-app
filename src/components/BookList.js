import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onUpdate }) => {
  const renderBooks = books.map((book) => {
    return (
      <BookShow
        book={book}
        key={book.id}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    );
  });

  return <div className="book-list">{renderBooks}</div>;
};

export default BookList;
