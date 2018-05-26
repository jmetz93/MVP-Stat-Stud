import React from 'react';

const PlayerList = (props) => (
  <div>
    <h4>Players Recently Searched For: </h4>
    <div>
    {props.map(function(player) {
      return (
        <ul id="player" class="player list">
          <li>{player.name}</li>
        </ul>
      )
    })}
    </div>
  </div>
)

export default RepoList;