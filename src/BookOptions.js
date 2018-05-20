import React from "react";
import PropTypes from "prop-types";

const BookOptions = props => {
  this.onShelfChanged = (book, shelf) => {
    if (book.shelf)
      // these are options for a book that exist in Library
      props.moveToShelf(book.id, shelf);
    // these are options for a book in search results
    else {
      props.addToLibrary(book, shelf);
    }
  };

  return (
    <div className="book-shelf-changer">
      <select
        onChange={event => this.onShelfChanged(props.book, event.target.value)}
        defaultValue={props.book.shelf ? props.book.shelf : "none"}
      >
        <option value="move-to" disabled>
          Move to...
        </option>
        <option value="currentlyReading"> Currently Reading </option>
        <option value="wantToRead"> Want to Read </option>
        <option value="read"> Read </option>
        <option value="none"> None </option>
      </select>
    </div>
  );
};

BookOptions.propTypes = {
  book: PropTypes.object,
  moveToShelf: PropTypes.func,
  addToLibrary: PropTypes.func
};

export default BookOptions;
