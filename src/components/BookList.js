import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

const BookList = () => {
  const { books } = useBooksContext();

  const renderBooks = books.map((book) => {
    return (
      <div className="book-list">
        <BookShow book={book} key={book.id} />
      </div>
    );
  });

  return <div className="book-list">{renderBooks}</div>;
};

export default BookList;
