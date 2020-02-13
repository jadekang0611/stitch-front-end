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

  const url = 'http://stitchappjr.herokuapp.com';

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
                const outfit = {
                  shirt: shirtSelected,
                  pants: pantsSelected,
                  jacket: jacketSelected,
                  name: nameSelected
                };
                setOutfitData(outfit);
              })
          )
      );
  }, [nameSelected]);

  const addShirt = e => {
    e.target.style.opacity = '1';
    const shirtImage = e.target.src;
    const shirtBrand = e.target.alt;
    const shirtObject = {
      brand: shirtBrand,
      image: shirtImage
    };
    setShirtSelected(shirtObject);
  };
  const addPants = e => {
    e.target.style.opacity = '1';
    const pantsImage = e.target.src;
    const pantsBrand = e.target.alt;
    const pantsObject = {
      brand: pantsBrand,
      image: pantsImage
    };
    setPantsSelected(pantsObject);
  };
  const addJacket = e => {
    e.target.style.opacity = '1';
    const jacketImage = e.target.src;
    const jacketBrand = e.target.alt;
    const jacketObject = {
      brand: jacketBrand,
      image: jacketImage
    };
    setJacketSelected(jacketObject);
  };

  const setOutfit = e => {
    e.preventDefault();
    const outfit = {
      shirt: shirtSelected,
      pants: pantsSelected,
      jacket: jacketSelected,
      name: nameSelected
    };
    setOutfitData(outfit);
    axios
      .post(url + '/outfits', outfitData)
      .then(res => {})
      .catch(console.error);
  };

  return (
    <>
      <h1 className="sub-title">Pick Your Nightout Outfit</h1>
      <Container className="clothes-container">
        {shirtData.map((shirt, i) => {
          return (
            <div className="image-container" key={i}>
              <img
                className={'shirt' + i + ' selection-image'}
                src={shirt.image}
                alt={shirt.brand}
                onClick={addShirt}
              />
            </div>
          );
        })}
      </Container>
      <hr></hr>
      <Container className="clothes-container">
        {pantsData.map((pants, i) => {
          return (
            <div className="image-container" key={i}>
              <img
                className={'pants' + i + ' selection-image'}
                src={pants.image}
                alt={pants.brand}
                onClick={addPants}
              />
            </div>
          );
        })}
      </Container>
      <hr></hr>
      <Container className="clothes-container">
        {jacketData.map((jacket, i) => {
          return (
            <div className="image-container" key={i}>
              <img
                className={'jacket' + i + ' selection-image'}
                src={jacket.image}
                alt={jacket.brand}
                onClick={addJacket}
              />
            </div>
          );
        })}
      </Container>
      <Container className="create-container">
        <input
          onChange={e => setNameSelected(e.target.value)}
          type="text"
          className="input-list"
        />
        <button onClick={setOutfit} className="input-button">
          Create Your Outfit!
        </button>
      </Container>
    </>
  );
}

export default List;
