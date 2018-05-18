import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Library from "./Library";
import SearchPage from "./SearchPage";
import SearchButton from "./SearchButton";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  };

  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }

  switchToSearchPage = show => {
    this.setState({
      showSearchPage: show
    });
  };
  /*
   * this function is called when the user click and change the shelf for a book inside the main page
   * (book that already exist in Library)
   */
  moveToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      // set the new value for book.shelf
      book.shelf = shelf;
      if (shelf === "none") {
        /* on this case, the book should be removed from books array
         */
        for (let i = 0; i < this.state.books.length; i++)
          if (book.id === this.state.books[i].id) {
            this.state.books.splice(i, 1);
            break;
          }
        this.setState(this.state.books);
      } else {
        /* because book is a reference to an element of this.state.books array
         * at this moment we could say that the state of Library is already modified
         * then calling setState and passing as argument this.state should render the Library
         * with all of it 's children updated
         */
        this.setState(this.state.books);
      }
    });
  };

  /*
   * this function is called when the user click and change the shelf for a book inside the search page
   * this will add the book to the Library on the chosen shelf
   */
  addToLibrary = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      // set the  value for book.shelf
      book.shelf = shelf;
      let books = this.state.books;
      books.push(book);
      this.setState(books);
    });
  };

  render() {
    const { books, showSearchPage } = this.state;
    return (
      <div className="app">
        {" "}
        {showSearchPage ? (
          <SearchPage
            books={books}
            switchToSearchPage={this.switchToSearchPage}
            moveToShelf={this.moveToShelf}
            addToLibrary={this.addToLibrary}
          />
        ) : (
          <div>
            <Library books={books} moveToShelf={this.moveToShelf} />{" "}
            <SearchButton switchToSearchPage={this.switchToSearchPage} />{" "}
          </div>
        )}{" "}
      </div>
    );
  }
}

export default BooksApp;
