import React from 'react';
import { useState, useEffect } from 'react';
const axios = require('axios');
const url = 'http://localhost:7000/outfits';

function ItemCard(props) {
   const [input, setInput] = useState(false);
   const [newName, setNewName] = useState('');
   const updateName = e => {
      axios.put(url + '/' + props.outfit._id, {name: newName}).then(() => window.location.reload())
    };
    const deleteEntry = () => {
        axios.delete(url + '/' + props.outfit._id).then(() => window.location.reload())
    };

    

   return (
      <>
         <div>
            <div>
               <h1>{props.outfit.name}</h1>
               <button onClick={() => setInput(!input)}>Edit Name</button>
               {input && (
                  <input
                     onChange={e => setNewName(e.target.value)}
                     type='text'
                  />
               )}
               {input && <button onClick={updateName}>Save</button>}
               <img
                  src={props.outfit.shirt.image}
                  alt={props.outfit.shirt.brand}
               ></img>
               <img
                  src={props.outfit.pants.image}
                  alt={props.outfit.pants.brand}
               ></img>
               <img
                  src={props.outfit.jacket.image}
                  alt={props.outfit.jacket.brand}
               ></img>
               <button onClick={deleteEntry}>Delete</button>
            </div>
         </div>
      </>
   );
}

export default ItemCard;
