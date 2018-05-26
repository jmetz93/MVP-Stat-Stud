import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      term: '';
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render()
}