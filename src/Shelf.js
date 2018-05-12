import React from "react";

//split the UI into independent and reusable shelf components

class Shelf extends React.Component {
    state = {
        read: ''
      };
      render() {
        return (
          <div>
            {this.props.state}
          </div>
        );
      }
}