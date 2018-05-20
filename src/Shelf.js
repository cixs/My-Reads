import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
//split the UI into independent and reusable 'shelf' components

const Shelf = props => {
  //parent component for Book(s)
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title"> {props.title} </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            <Book book={book} key={book.id} moveToShelf={props.moveToShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array,
  title: PropTypes.string,
  moveToShelf: PropTypes.func
};

export default Shelf;
