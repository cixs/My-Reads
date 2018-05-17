import React from 'react'

class SearchButton extends React.Component {
    render() {
    const {switchToSearchPage} = this.props
      return (
        <div className="open-search">
              <a
                onClick={() =>
                  switchToSearchPage(true)
                }
              >
                Add a book
              </a>
            </div>
      );
    }
  };

  export default SearchButton;