import React from "react";
import BookOptions from "./BookOptions";
import cover_not_available from "./img/cover-not-available.png";
import PropTypes from "prop-types";

//split the UI into independent and reusable 'Book' components

const Book = props => {
  const bkgImage =
    props.book.imageLinks && props.book.imageLinks.thumbnail
      ? `url(${props.book.imageLinks.thumbnail})`
      : `url(${cover_not_available})`;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: bkgImage
            }}
          />
          <BookOptions
            book={props.book}
            moveToShelf={props.moveToShelf}
            addToLibrary={props.addToLibrary}
          />
        </div>
        <div className="book-title">
          {props.book.title ? props.book.title : "No title"}
        </div>
        <div className="book-authors">
          {props.book.authors
            ? props.book.authors.map((author, index) => (
                <div key={index}> {author} </div>
              ))
            : "Unknown author(s)"}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object,
  books: PropTypes.array,
  moveToShelf: PropTypes.func,
  addToLibrary: PropTypes.func
};
export default Book;
