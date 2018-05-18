import React from "react";
import { Link } from "react-router-dom";

class SearchButton extends React.Component {
  render() {
    return (
      <div className="open-search">
        <Link to="/search">Search</Link>
      </div>
    );
  }
}

export default SearchButton;
