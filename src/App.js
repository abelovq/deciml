
import CardList from './components/CardList/CardList';
import MapsicleMap from './assets/MapsicleMap.png'
import './App.css';

const mockData = [
  {
    id: '1',
    title: 'US GDP',
    data: {
      text: 'What will US GDP growth be in 2021 ?',
      date: '2021-01-20T00:00:00.000Z',
      img: MapsicleMap,
      forecastsMade: 10,
      probabilityCurrentForecast: 40
    },

  },
  {
    id: '2',
    title: 'Australia CPI',
    data: {
      text: 'What will Australian inflation be for Q1 2022?',
      date: '2021-01-20T00:00:00.000Z',
      img: MapsicleMap,
      forecastsMade: 17,
      probabilityCurrentForecast: 80
    },
  },
  {
    id: '3',
    title: 'NSW Business Confidence',
    data: {
      text: 'Will New South Wales business confidence improve or fail in 2021?',
      date: '2021-01-20T00:00:00.000Z',
      img: MapsicleMap,
      forecastsMade: 23,
      probabilityCurrentForecast: 50
    },
  }
];

function App() {
  return (
    <div className="App">
      <p>Current Forecasts:</p>
      <CardList data={mockData} />
    </div>
  );
}

export default App;
