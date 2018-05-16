import React from "react";
import Book from "./Book";


//split the UI into independent and reusable 'shelf' components

class Shelf extends React.Component {
  render() {
    const { books, title, shelfType } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {title} </h2>{" "}
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter(book => book.shelf === shelfType)
              .map(book => <Book book={book} key = {book.id}/>)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
