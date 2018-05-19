import React from "react";
import BookOptions from "./BookOptions";
import cover_not_available from "./img/cover-not-available.png";
import PropTypes from "prop-types";

//split the UI into independent and reusable 'Book' components

class Book extends React.Component {
  render() {
    const { book, moveToShelf, addToLibrary } = this.props;
    const bkgImage =
      book.imageLinks && book.imageLinks.thumbnail
        ? `url(${book.imageLinks.thumbnail})`
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
              book={book}
              moveToShelf={moveToShelf}
              addToLibrary={addToLibrary}
            />
          </div>
          <div className="book-title">
            {" "}
            {book.title ? book.title : "No title"}{" "}
          </div>
          <div className="book-authors">
            {book.authors
              ? book.authors.map((author, index) => (
                  <div key={index}> {author} </div>
                ))
              : "Unknown author(s)"}
          </div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object,
  books: PropTypes.array,
  moveToShelf: PropTypes.func,
  addToLibrary: PropTypes.func
};
export default Book;
