import React from "react";
import "./App.css";
import Library from "./Library";
import SearchPage from "./SearchPage";
import SearchButton from "./SearchButton";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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

  switchToSearchPage = show => {
    this.setState({
      showSearchPage: show
    });
  };

  /*
   * this function is called when the user click and change the shelf for a book
   */
  moveToShelf = (id, shelf) => {
    let temp = this.state.books;
    let index, book;

    for (let i = 0; i < temp.length; i++)
      if (id === temp[i].id) {
        index = i;
        book = temp[i];
        break;
      }

    BooksAPI.update(book, shelf).then(response => {
      // set the new value for book.shelf
      book.shelf = shelf;
      if (shelf === "none") {
        /* on this case, the book should be removed from books array
         */
        this.state.books.splice(index, 1);
      }
      this.setState(temp);
    });
  };

  /*
   * this function is called when the user click and change the shelf for a book
   *  inside the search page and that book doesn't exist in Library
   * it will add the book on the chosen shelf
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
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Library books={books} moveToShelf={this.moveToShelf} />
              <SearchButton />
            </div>
          )}
        />
        <Route
          path="/search"
          render={({ props }) => (
            <SearchPage
              books={books}
              moveToShelf={this.moveToShelf}
              addToLibrary={this.addToLibrary}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
