import React from 'react'
import './styles.css';

const Card = ({ data, onCardClick },) => {
  const { title, data: { text } } = data;

  const onClick = () => onCardClick(data);

  return (
    <div className="card" onClick={onClick}>
      <header className="card__header">{title}</header>
      <main className="card__content">
        <p>{text}</p>
      </main>
    </div>
  )
};

export default Card;
