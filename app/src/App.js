import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import * as TitleAPI from './api/titleAPI';
import { Title } from './components/Title';
import TitleList from './components/TitleList';

class SearchContainer extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      names: [],
      searchWord: ""
    };
  }

  handleInputChange(e) {
    this.setState({
      searchWord: e.target.value
    });
    //this.props.updateNameList(this.state.searchWord);
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.history.push('/Search/' + this.state.searchWord);
    this.props.updateNameList(this.state.searchWord);
  }
  
  render() {
    return (
      <div>
        {/* {this.state.searchWord} */}
        <SearchBar 
          handleChange={this.handleInputChange.bind(this)}
          onFormSubmit={this.onFormSubmit.bind(this)}
        />
      </div>
    );
  }
}

const SearchBar = (props) => {
  return (
    <form onSubmit={props.onFormSubmit}>
    <input
      type="text"
      placeholder="Search..."
      onChange={props.handleChange}
    />
    </form>
  );
}

class App extends Component {
  
  state = { titles: [] }

  updateNameList(name) {
    TitleAPI.searchTitles(name)
      .then(res => {
        const titles = res.data;
        this.setState({ titles });
      })
      .catch(error => console.error("Error:", error));
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Movies</h1>

          <Route 
            path="/" 
            render={props => <SearchContainer {...props} updateNameList={this.updateNameList.bind(this)} />} 
          />
          <br />
          <br />
          
          <Results>
            <Route 
              path="/search/:query" 
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

const Results = (props) => {
  return (
      <div>
        {props.children}
    </div> );

}

export default App;
