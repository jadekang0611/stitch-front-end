import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

const axios = require('axios');

function List(props) {
  const [shirtData, setShirtData] = useState([]);
  const [pantsData, setPantsData] = useState([]);
  const [jacketData, setJacketData] = useState([]);
  const [outfitData, setOutfitData] = useState([]);
  const [shirtSelected, setShirtSelected] = useState({});
  const [pantsSelected, setPantsSelected] = useState({});
  const [jacketSelected, setJacketSelected] = useState({});
  const [nameSelected, setNameSelected] = useState('');

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

  const addShirt = e => {
    const shirtImage = e.target.src;
    const shirtBrand = e.target.alt;
    const shirtObject = {
      brand: shirtBrand,
      image: shirtImage
    };
    setShirtSelected(shirtObject);
    console.log(shirtSelected);
  };
  const addPants = e => {
    const pantsImage = e.target.src;
    const pantsBrand = e.target.alt;
    const pantsObject = {
      brand: pantsBrand,
      image: pantsImage
    };
    setPantsSelected(pantsObject);
    console.log(pantsSelected);
  };
  const addJacket = e => {
    const jacketImage = e.target.src;
    const jacketBrand = e.target.alt;
    const jacketObject = {
      brand: jacketBrand,
      image: jacketImage
    };
    setJacketSelected(jacketObject);
    console.log(jacketSelected);
  };

  const setOutfit = () => {
    const outfit = {
      shirt: shirtSelected,
      pants: pantsSelected,
      jacket: jacketSelected,
      name: nameSelected
    };

    setOutfitData(outfit);

    axios
      .post(url + '/outfits', outfitData)
      .then(res => {
        console.log(res);
      })
      .catch(console.error);
  };

  return (
    <>
      <h1>Pick Your Nightout Outfit</h1>
      <Container className="clothes-container">
        {shirtData.map(shirt => {
          return (
            <div>
              <img
                src={shirt.image}
                width="100"
                height="100"
                alt={shirt.brand}
                onClick={addShirt}
              ></img>
            </div>
          );
        })}
      </Container>
      <Container className="clothes-container">
        {pantsData.map(pants => {
          return (
            <div>
              <img
                src={pants.image}
                width="100"
                height="100"
                alt={pants.brand}
                onClick={addPants}
              ></img>
            </div>
          );
        })}
      </Container>
      <Container className="clothes-container">
        {jacketData.map(jacket => {
          return (
            <div>
              <img
                src={jacket.image}
                width="100"
                height="100"
                alt={jacket.brand}
                onClick={addJacket}
              ></img>
            </div>
          );
        })}
      </Container>
      <Container className="create-container">
        <input onChange={e => setNameSelected(e.target.value)} type="text" />
        <button onClick={setOutfit}>Create Your Outfit!</button>
      </Container>
    </>
  );
}

export default List;
