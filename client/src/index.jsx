import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import PlayerList from './components/PlayerList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    axios.get('/players').then((res) => {
      this.setState({
        players: res.data
      })
    })
  }

  search (term) {
     axios.post('/players', term).then((response) => {
      players.unshift(response.data.name) 
      console.log('Successful Post');
    });
  }


  render () {
    return (<div>
      <h1>NBA Guru</h1>
      <h3>Tell me who you want to know about</h3>
      <Search players={this.state.players} onSearch={this.search.bind(this)}/>
      <PlayerList players={this.state.players}/> 
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'));