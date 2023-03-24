import { useState, useEffect } from 'react';
import './App.css';
import generation from './generation';

function App() {
  const [arr, setArr] = useState(generation());
  const [cards, setCards] = useState([]);
  const [addCards, setAddCards] = useState(true);

  useEffect(() => {
    if (addCards && arr.length > 0) {
      setTimeout(() => {
        setCards([...cards, ...arr.slice(0, 50)]);
        setAddCards(false);
        setArr([...arr.slice(50)]);
      }, 500);
    }
  }, [addCards]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHendler);
    return function () {
      document.removeEventListener('scroll', scrollHendler);
    };
  }, []);

  const scrollHendler = (event) => {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setAddCards(true);
    }
  };

  return (
    <div className="table">
      {addCards && arr.length > 0 && <div className="loading">loading...</div>}
      {cards.map((el) => (
        <div key={el.id} className="cards">
          <img src="icon.png" alt="avatar" className="photo" />
          <div className="title">
            ФИО участника:{' '}
            {el.fullName.length < 23
              ? el.fullName
              : `${el.fullName.slice(0, 23)}...`}
          </div>
          <div className="title">Max скорость: {el.maxSpeed} км/ч</div>
          <div className="title">Время заезда: {el.time} hh:mm:ss </div>
          <div className="title">Штрафное время: {el.penaltyTime} mm:ss</div>
          <div className="title">Рейтинг: {el.id}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
