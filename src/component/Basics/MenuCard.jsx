// MenuCard.jsx
import React from 'react';
import './style.css';

const MenuCard = ({ menuData, onOrderNow }) => {
  return (
    <section className='main-card-container'>
      {menuData.map((curElem) => {
        const { id, name, title, description, image } = curElem;

        return (
          <div className="card-container" key={id}>
            <div className="card">
              <div className="card-body">
                <h1 className='card-header'>{name}</h1>
                <h2 className='card-title'>{title}</h2>
                <span className='card-description subtle'>{description}</span>
                <div className="card-read">Read</div>
              </div>
              <img src={image} alt={name} className='card-media' />
              
              {/* Clickable Order Now */}
              <button
                className='card-tag subtle'
                onClick={onOrderNow}
              >
                Order Now
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MenuCard;
