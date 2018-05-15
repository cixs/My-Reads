import React from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

//split the UI into independent and reusable 'shelf' components

class Shelf extends React.Component {
  constructor(props) {
    super(props);
    //contain the read property, which may have 1 of 3 values: Currently Reading, Want to Read, Read
  }

  state = {
    books: []
    // an array of books which have the read state equal to this.props.read
  };

  render() {
    const { books } = this.state;
    const { read } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {read} </h2>{" "}
        <div className="bookshelf-books">
          <ol className="books-grid" />{" "}
        </div>
      </div>
    );
  }
}

export default Shelf;
