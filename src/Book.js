import React from "react";

//split the UI into independent and reusable book components

class Book extends React.Component {
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