import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {


  render() {
    return (
      <div>
        <h1> hello there !  </h1>
      </div>
    );
  }
}

Meteor.startup( () => {
  ReactDOM.render(<App />, document.querySelector('.container'));

});


// ReactDOM.render(<App />, document.querySelector('.container'));
