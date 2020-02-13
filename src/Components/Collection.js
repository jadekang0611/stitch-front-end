import ItemCard from './ItemCard';
import React, { useState, useEffect } from 'react';
const axios = require('axios');

function Collection(props) {
   const [itemCards, setItemCards] = useState([]);
   const url = 'http://localhost:7000';

   useEffect(() => {
      axios.get(url + '/outfits').then(res => setItemCards(res.data));
   }, []);

   return (
      <>
         {itemCards &&
            itemCards.map((card, i) => {
               return (
                  <div key={i}>
                     <ItemCard outfit={card} />
                  </div>
               );
            })}
         <div className='underneath-div'></div>
      </>
   );
}

export default Collection;
