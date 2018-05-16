import React from "react";
import ShelfOptions from "./ShelfOptions";

//split the UI into independent and reusable 'Book' components

class Book extends React.Component {
  render() {
    const { book, moveToShelf } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}
            />{" "}
            <ShelfOptions book={book} moveToShelf={moveToShelf} />{" "}
          </div>{" "}
          <div className="book-title"> {book.title} </div>{" "}
          <div className="book-authors">
            {" "}
            {book.authors.map((author, index) => (
              <div key={index}> {author} </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </li>
    );
  }
}

export default Book;
