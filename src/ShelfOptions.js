import React from "react";

class ShelfOptions extends React.Component {
  render() {
    const { book, moveToShelf  } = this.props;

    let actualShelf = book.shelf;

    return (
      <div className="book-shelf-changer">
        <select onChange={(event) => moveToShelf (book, event.target.value)} defaultValue={actualShelf}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfOptions;
