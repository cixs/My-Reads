import React from "react";
import Shelf from "./Shelf";
import * as BooksAPI from "./BooksAPI";

class Library extends React.Component {
  // parent component for Shelves

  // moved books array here, as a state of Library component
  state = {
    books: []
  };

  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }

  moveToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      // set the new value for book.shelf
      book.shelf = shelf;
      // because book is a reference to an element of this.state.books array
      // at this moment we could say that the state of Library is already modified
      // then calling setState and passing as argument this.state should corectly render the Library
      // with all of it's children updated
      this.setState(this.state.books);
    });
  };

  render() {
    const { books } = this.state;
    const {switchToSearchPage} = this.props;

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
              moveToShelf={this.moveToShelf}
              key={shelf.content}
            />
          ))}
        </div>
        <div className="open-search">
              <a
                onClick={() =>
                  switchToSearchPage(true)
                }
              >
                Add a book
              </a>
            </div>
      </div>
    );
  }
}

export default Library;
