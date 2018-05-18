import React from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import { Link} from "react-router-dom";
import PropTypes from 'prop-types';

class SearchPage extends React.Component {
  state = {
    results: []
  };

  /*
* function to update options values for every book
* displayed on search page
* every book is checked if exist in Library (main page)
* and, on this case, the book.shelf value is set as the value of shelf in the corresponding book 
*/
  updatedOptionsArray = results => {
    const { books } = this.props;

    let updatedArray = results.map(b => {
      for (let book of books) {
        if (b.id === book.id) {
          b.shelf = book.shelf;
          break;
        }
      }
      return b;
    });
    return updatedArray;
  };

  searchBooks = event => {
    const query = event.target.value.trim();

    if (query) {
      let newState = [];

      BooksAPI.search(query).then(result => {
        if (Array.isArray(result)) newState = this.updatedOptionsArray(result);
          this.setState({
            results: newState
          });

      });
    } else
      this.setState({
        results: []
      });
  };

  render() {
    const { results } = this.state;
    const { books, moveToShelf, addToLibrary } = this.props;
    let searchResults = results.length > 0 ? true : false;

    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {searchResults ? (
            <ol className="books-grid">
              {results.map(book => (
                <Book
                  book={book}
                  books={books}
                  key={book.id}
                  moveToShelf={moveToShelf}
                  addToLibrary={addToLibrary}
                />
              ))}
            </ol>
          ) : (
            <div className="search-result-error">
              <h3> No search results</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  books:PropTypes.array,
  moveToShelf:PropTypes.func,
  addToLibrary:PropTypes.func
};

export default SearchPage;
