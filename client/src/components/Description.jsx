import React from 'react';
import axios from 'axios';

const Description = (props) => (
  <div>
    <ul id="player" className="player description">
      <li>Name: {props.player.name}</li>
      <li>Status: {props.player.status}</li>
      <li>Team: {props.player.current_team}</li>
      <li>Debut: {props.player.draft_year}</li>
    </ul>
  </div>
)

export default Description;
