import React, { Component } from 'react';
import { withRouter } from 'react-router';

class LoggedInLayout extends Component {
  componentDidMount() {
    this.props.router.push('/login');
  }

  render() {
    if(false) {
      return (
        <div>
          <h1> LoggedIn </h1>
          {this.props.children}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(LoggedInLayout);
