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
      BooksAPI.search(query).then(result => {
        if(Array.isArray(result))
          this.setState({
            books: result
          });
        else
          this.setState({
            books: []
          });
      });
    }
  };

  render() {
    const { books } = this.state;
    const { switchToSearchPage, moveToShelf, addToLibrary } = this.props;
    let results = books.length>0? true:false

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
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
        {
          results?(
          <ol className="books-grid">
            {books.map(book => (
              <Book
                book={book}
                key={book.id}
                moveToShelf={moveToShelf}
                addToLibrary={addToLibrary}
              />
            ))}
          </ol>
          ):(
            <div className="search-result-error">
            <h3> No results for this search text</h3>
          </div> 
          )
        }
        </div>
      </div>
    );
  }
}
export default SearchPage;
