import React from "react";

class BookOptions extends React.Component {

  onShelfChanged = (book, shelf) => {
    const { moveToShelf, addToLibrary } = this.props;
    if (book.shelf)
      // book exist in Library
      moveToShelf(book, shelf);
    // book was not added into Library
    else 
      addToLibrary(book, shelf);
  };

  render() {
    const { book, moveToShelf, addToLibrary } = this.props;

    let actualShelf = book.shelf? book.shelf : "none";

    return (
      <div className="book-shelf-changer">
        <select
          onChange={event => this.onShelfChanged(book, event.target.value)}
          defaultValue={actualShelf}
        >
          <option value="none" disabled>
            Move to...
          </option>{" "}
          <option value="currentlyReading"> Currently Reading </option>{" "}
          <option value="wantToRead"> Want to Read </option>{" "}
          <option value="read"> Read </option>{" "}
          <option value="none"> None </option>{" "}
        </select>{" "}
      </div>
    );
  }
}

export default BookOptions;
