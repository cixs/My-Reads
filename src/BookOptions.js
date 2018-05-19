import React from "react";
import PropTypes from "prop-types";

class BookOptions extends React.Component {
  onShelfChanged = (book, shelf) => {
    const { moveToShelf, addToLibrary } = this.props;
    if (book.shelf)
      // these are options for a book that exist in Library
      moveToShelf(book, shelf);
    // these are options for a book in search results
    else addToLibrary(book, shelf);
  };

  render() {
    const { book } = this.props;

    let actualShelf = book.shelf ? book.shelf : "none";

    return (
      <div className="book-shelf-changer">
        <select
          onChange={event => this.onShelfChanged(book, event.target.value)}
          defaultValue={actualShelf}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading"> Currently Reading </option>
          <option value="wantToRead"> Want to Read </option>
          <option value="read"> Read </option>
          <option value="none"> None </option>
        </select>
      </div>
    );
  }
}

BookOptions.propTypes = {
  book: PropTypes.object,
  moveToShelf: PropTypes.func,
  addToLibrary: PropTypes.func
};

export default BookOptions;
