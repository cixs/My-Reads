import React from "react";
import Book from "./Book";

//split the UI into independent and reusable 'shelf' components

class Shelf extends React.Component {
  //parent component for Book(s)

  render() {
    const { books, title, moveToShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {title} </h2>{" "}
        <div className="bookshelf-books">
          <ol className="books-grid">
            {" "}
            {books.map(book => <Book book={book} key={book.id} moveToShelf = {moveToShelf }/>)}{" "}
          </ol>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Shelf;
