import React from 'react';
import './game-card.css';

const GameCard = props => (
      <img class="click-item" alt={props.name} src={props.image} />
);

export default GameCard;
