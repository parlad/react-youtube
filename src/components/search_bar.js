import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// function components :- only render the things
// class component can communicate with other components
class SearchBar extends Component {
  //only class base component has state
constructor(props) {
   super(props);//error....
   this.state = { term : '' };
}

  render() {
    return (
      <div className = "search-bar">
        <input
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
