import React from 'react';
import './game-card.css';

const GameCard = props => (
      <img className="click-item" id={props.id} alt={props.name} src={props.image} onClick={props.onClick} />
);

export default GameCard;