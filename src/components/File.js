import React, { Component } from "react";

class File extends Component {
  render() {
    return (
      <section>
        <h1>
          Name: {this.props.name} {this.props.lastName}
        </h1>
      </section>
    );
  }
}

export default File;
