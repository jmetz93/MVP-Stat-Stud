import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      term: '',
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
    console.log(this.state.term);
  }

  search() {
    // this.props.onSearch(this.state.term);
    axios.post('/players', {data: this.state.term}).then((response) => {
      players.unshift(response.data.name) 
      console.log('Successful Post');
    });
  }

  render() {
    return (<div>
      <h4>Search for a player!</h4>
      Enter a player name here: <input type="text" onKeyUp={this.onChange.bind(this)}/>
      <button onClick={this.search.bind(this)}> Search </button>
      <Description onClick={this.search.bind(this)} term = {this.state.term}/>
    </div>)
  }
}

export default Search;