import React from 'react';
import PlayerEntry from './PlayerEntry.jsx';

const PlayerList = (props) => (
  <div>
    <h4>Players Recently Searched For: </h4>
    <div>
    { props.players.map((player) => <PlayerEntry player ={player}/>)}
    </div>
  </div>
)

export default PlayerList;