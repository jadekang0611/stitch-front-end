import React, { useState, useEffect } from 'react';

function List() {
  const [shirtData, setShirtData] = useState([]);
  const [pantsData, setPantsData] = useState([]);
  const [jacketData, setJacketData] = useState([]);
  const [outfitData, setOutfitData] = useState([]);

  const url = 'http://localhost:7000';

  useEffect(() => {
    fetch(url + '/shirts')
      .then(res => res.json())
      .then(res => {
        setShirtData(res);
      })
      .catch(console.error)
      .then(
        fetch(url + '/pants')
          .then(res => res.json())
          .then(res => {
            setPantsData(res);
          })
          .catch(console.error)
          .then(
            fetch(url + '/jackets')
              .then(res => res.json())
              .then(res => {
                setJacketData(res);
              })
          )
      );
  }, []);
  return (
    <>
      <h1>Pick Your Nightout Outfit</h1>
      {shirtData.map(shirt => {
        return (
          <div>
            <img
              src={shirt.image}
              width="100"
              height="100"
              alt={shirt.brand}
            ></img>
            <button>Add</button>
          </div>
        );
      })}
      {pantsData.map(pants => {
        return (
          <div>
            <img
              src={pants.image}
              width="100"
              height="100"
              alt={pants.brand}
            ></img>
            <button>Add</button>
          </div>
        );
      })}
      {jacketData.map(jacket => {
        return (
          <div>
            <img
              src={jacket.image}
              width="100"
              height="100"
              alt={jacket.brand}
            ></img>
            <button>Add</button>
          </div>
        );
      })}
    </>
  );
}

export default List;
