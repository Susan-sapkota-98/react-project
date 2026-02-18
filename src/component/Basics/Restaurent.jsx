// Restaurent.jsx
import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi.jsx';
import MenuCard from './MenuCard.jsx';

const uniqueList = Menu.map((curElem) => curElem.category);

const Restaurent = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [canSubmit, setCanSubmit] = useState(false); // 🔹 NEW

  const filterItem = (category) => {
    if (category === "all") {
      setMenuData(Menu);
      return;
    }
  
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  const handleOrderNow = () => {
    setCanSubmit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order submitted!");
  };

  return (
    <>
      <nav className='navbar'>
        <div className="btn-group">
          <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
          <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
          <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button>
          <button className='btn-group__item' onClick={() => filterItem("all")}>All</button>
        </div>
      </nav>

      {/* Menu Cards */}
      <MenuCard menuData={menuData} onOrderNow={handleOrderNow} />

      {/* Submit Button (only shows after Order Now is clicked) */}
      {canSubmit && (
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default Restaurent;
