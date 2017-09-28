import React, { Component } from 'react';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <h1> Main </h1>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
