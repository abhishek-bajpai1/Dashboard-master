import React from 'react';
import './Card.css';

const Card = () => {
  const cardsData = [
    { id: 1, title: 'BasketHunt Academy', content: 'Content for Card 1' },
    { id: 2, title: 'BasketHunt Work', content: 'Content for Card 2' },
    { id: 3, title: 'BasketHunt office', content: 'Content for Card 3' },
    { id: 4, title: 'Basekthunt Traning', content: 'Content for Card 4' },
    { id: 5, title: 'BasketHunt wiki', content: 'Content for Card 5' },
    { id: 6, title: 'Baskethunt work', content: 'Content for Card 6' },
    { id: 7, title: 'BasketHunt careers', content: 'Content for Card 7' },
    { id: 8, title: 'zoho cliq', content: 'Content for Card 8' },
  ];

  return (
    <div className='body-middle'>
    <div className="card-grid">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card;
