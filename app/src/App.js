import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {titles: []}
  
  componentDidMount() {
    fetch('api/titles')
      .then(res => res.json())
      .then(titles => this.setState({ titles }));
  }  
  
  render() {
    return (
      <div className="App">
        <h1>Titles</h1>
        {
          this.state.titles.map(title =>
          <div key={title.id}>{title.name}</div>
        )}
      </div>
    );
  }
}

export default App;
