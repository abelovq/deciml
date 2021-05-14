import React from 'react'
import './styles.css';

const ChosenCard = ({
  title,
  data: { text, date, forecastsMade, img, probabilityCurrentForecast }
}) => {
  const formatedDate = new Date(date).toLocaleDateString().replace(/\//g, '-');
  const chances = probabilityCurrentForecast >= 70
    ? 'PROBABILITY, yes'
    : 'PROBABILITY, no';

  return (
    <div className="chosen-card">
      <header className="chosen-card__header">{title}</header>
      <main className="chosen-card__content">
        <p>{text}</p>
        {/* here probably should be datepicker */}
        Due date: <span className="chosen-card__date">{formatedDate}</span>
        {/* here probably should be map */}
        <img className="chosen-card__map" src={img} alt="" />
      </main>
      <footer className="chosen-card__footer">
        <p>Number of forecasts Made: <strong>{forecastsMade}</strong></p>
        <p>Current forecast: <strong>{chances}</strong> </p>
      </footer>
    </div>
  )
};

export default ChosenCard;
