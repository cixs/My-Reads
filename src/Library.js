import React from "react";
import Shelf from "./Shelf";

class Library extends React.Component {
// parent component for Shelves

  render() {

    const { books } = this.props
    const shelves = [
      { content: "currentlyReading", title: "Currently Reading" },
      { content: "wantToRead", title: "Want to Read" },
      { content: "read", title: "Read" }
    ]

    return (
      <div className="list-books-content">
        {shelves.map(shelf => 
          <Shelf
            books={books.filter(book => book.shelf === shelf.content)}
            title={shelf.title}
            key = {shelf.content}
          />
        )}
      </div>
    );
  }
}

export default Library;
