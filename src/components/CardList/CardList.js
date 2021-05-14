import React, { useState } from 'react'
import Card from '../Card/Card';
import ChosenCard from '../ChosenCard/ChosenCard';

import './styles.css';

const CardList = ({ data }) => {
  const [chosenCard, setChosenCard] = useState(null);

  const onCardClick = (card) => setChosenCard(card);

  return (
    <div className="container">
      <ul className="list">
        {data.map(card => {
          return <Card key={card.id} data={card} onCardClick={onCardClick} />
        })}
      </ul>
      {chosenCard && <ChosenCard key={chosenCard.id} {...chosenCard} />}
    </div>
  )
}

export default CardList;