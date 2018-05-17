import React from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

class SearchPage extends React.Component {
  state = {
    books: []
  };

  searchBooks = event => {
    const query = event.target.value.trim();

    if (query) {
      BooksAPI.search(query).then(books => {
          this.setState({
            books: books
          });
      });
    }
  };

  render() {
    const { books } = this.state;
    const { switchToSearchPage, moveToShelf, addToLibrary } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => switchToSearchPage(false)}>
            Close{" "}
          </a>{" "}
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.searchBooks}
            />{" "}
          </div>{" "}
        </div>{" "}
        <div className="search-books-results">
          <ol className="books-grid">
            {" "}
            {books.map(book => (
              <Book
                book={book}
                key={book.id}
                moveToShelf={moveToShelf}
                addToLibrary={addToLibrary}
              />
            ))}{" "}
          </ol>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default SearchPage;
