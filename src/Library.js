import React from "react";
import Shelf from "./Shelf";
import PropTypes from 'prop-types';

class Library extends React.Component {
  // parent component for Shelves

  render() {
    const { books, moveToShelf } = this.props;

    const shelves = [
      { content: "currentlyReading", title: "Currently Reading" },
      { content: "wantToRead", title: "Want to Read" },
      { content: "read", title: "Read" }
    ];


    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1> MyReads </h1>
        </div>
        <div className="list-books-content">
          {shelves.map(shelf => (
            <Shelf
              books={books.filter(book => book.shelf === shelf.content)}
              title={shelf.title}
              moveToShelf={moveToShelf}
              key={shelf.content}
            />
          ))}
        </div>
      </div>
    );
  }
}

Library.propTypes = {
  books:PropTypes.array,
  moveToShelf:PropTypes.func
};

export default Library;
