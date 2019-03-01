import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as TitleAPI from './api/titleAPI';
import { Title } from './components/Title';

class SearchLayout extends Component {
 


  render() {
    return (
      <div>
        <SearchBar />

      </div>
    );
  }
}

class Results extends Component {

  render() {
    return (
       <div>
         {this.props.children}
      </div> );
  }
}



class SearchContainer extends Component {
  
  state = { name: [] };

  componentDidMount(){}

  search() {

  }
  
  render() {
    return (
      <SearchBar />
    );
  }
}

const SearchBar = ({ props }) => {

  return (
    <div className="">
      <input  />
    </div>
  );
}

const TitleList = (props) => {

  console.log(props.titles);
   return (
      <ul>
        {
          props.titles.map( title => 
            <li key={title.id}>
              <div><Link to={`api/titles/${title.number}/details`}> {title.name} {title.releaseYear}</Link></div>
            </li>
          ) 
        }
      </ul>
  );
}

class App extends Component {
  
  state = { titles: [] }

  componentDidMount() {
    TitleAPI.getTitles()
      .then(res => {
        const titles = res.data;
        this.setState({ titles })})
      .catch(error => console.error("Error:", error));
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Titles</h1>


          <Route path="/" component={SearchLayout} />

          <Results>
            <Route 
              path="/search" 
              render={props => <TitleList {...props} titles={this.state.titles} />}
            />
            <Route
              path="/api/titles/:id/details"
              component={Title}
            />
          </Results>
        </div>
      </Router>
    );
  }
}

const Sidebar = (props) => {

};


export default App;
