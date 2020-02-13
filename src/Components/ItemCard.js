import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
const axios = require('axios');
const url = 'http://stitchappjr.herokuapp.com/outfits';

function ItemCard(props) {
  const [input, setInput] = useState(false);
  const [newName, setNewName] = useState('');
  const updateName = e => {
    axios
      .put(url + '/' + props.outfit._id, { name: newName })
      .then(() => window.location.reload());
  };
  const deleteEntry = () => {
    axios
      .delete(url + '/' + props.outfit._id)
      .then(() => window.location.reload());
  };

  return (
    <>
      <div>
        <div>
          <Container className="collection-content">
            <Row>
              <Col>
                <h1 className="collection-title">
                  Collection: {props.outfit.name}
                </h1>
              </Col>
            </Row>
            <Row>
              <Col className="buttons">
                <button
                  onClick={() => setInput(!input)}
                  className="collection-update-button"
                >
                  Edit Name
                </button>
                {input && (
                  <input
                    onChange={e => setNewName(e.target.value)}
                    type="text"
                    className="collection-update-input"
                  />
                )}
                {input && (
                  <button
                    onClick={updateName}
                    className="collection-update-button"
                  >
                    Save
                  </button>
                )}
                <button
                  className="collection-update-button collection-delete-button"
                  onClick={deleteEntry}
                >
                  Delete
                </button>
              </Col>
            </Row>
          </Container>
          <Container className="collection-box">
            <Row className="collection-row">
              <img
                className="shirt-collection"
                src={props.outfit.shirt.image}
                alt={props.outfit.shirt.brand}
              ></img>
              <p className="plus">+</p>
              <img
                className="pants-collection"
                src={props.outfit.pants.image}
                alt={props.outfit.pants.brand}
              ></img>
              <p className="plus">+</p>
              <img
                className="jacket-collection"
                src={props.outfit.jacket.image}
                alt={props.outfit.jacket.brand}
              ></img>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
