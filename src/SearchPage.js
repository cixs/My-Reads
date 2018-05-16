import React from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

class SearchPage extends React.Component {
  state = {
    query: "",
    books: []
  };

  searchBooks = event => {
    const query = event.target.value.trim();
    this.setState({ query: query });

    if (query) {
      BooksAPI.search(query).then(books => {
        this.setState({ books: books });
      });
    }
  };

  render() {
    const { query, books } = this.state;
    const {switchToSearchPage} = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => switchToSearchPage(false)}>
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(book => <Book book={book} key={book.id} />)}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
