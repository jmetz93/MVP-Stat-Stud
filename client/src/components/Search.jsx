import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      term: '',
      // players: this.props.state.players
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    // this.props.onSearch(this.state.term);
    axios.post('/players', {data: this.state.term}).then((response) => {
      alert('Pssh easy. Hit refresh to get your answer');
      this.addName(response.data.name);
      console.log('Successful Post');
      
    })
  }

  addName(name) {
    this.setState({
      players: players.unshift(name)
    })
  }

  render() {
    return (<div>
      <h4>Search for a player!</h4>
      Enter a player name here: <input type="text" onKeyUp={this.onChange.bind(this)}/>
      <button onClick={this.search.bind(this)}> Search </button>
    </div>)
  }
}

export default Search;