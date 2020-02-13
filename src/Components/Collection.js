import ItemCard from './ItemCard';
import React, { useState, useEffect } from 'react';
const axios = require('axios');


function Collection(props) {
   const [itemCards, setItemCards] = useState([]);
   const url = 'http://localhost:7000';

   useEffect(() => {
      axios
         .get(url + '/outfits')
        .then(res => setItemCards(res.data))
        console.log(itemCards)
  
   }, []);

   return (
      <>
         {itemCards && itemCards.map(card => {
           console.log(card)
            return (
               <div>
                  <ItemCard outfit={card} />
               </div>
            );
         })}
      </>
   );
}

export default Collection;
