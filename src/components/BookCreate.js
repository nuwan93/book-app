import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, settitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    settitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input
          className="input"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
