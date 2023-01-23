import React from 'react'
import Icon from './Icon.js'

import { ToastContainer, toast, Icons } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const itemArray = new Array(9).fill('empty');

const GameStructure = () => {
    const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    //in this function we are reloading the game 
    // so reloading means fixing the state back into original/default position 
    setIsCross (false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);

  }

  const checkWinner = () => {

  }

  const changeButton = itemNumber => {

  }
  return (
    <Container className='p-5'>
    <ToastContainer position='bottom-center' />
    <Row>
      <Col md={6} className='offset-md-3'>
        <div className='grid'>
          {itemArray.map((item, index) => (
            <Card>
              <CardBody className='box'>
                <Icon/>
              </CardBody>
            </Card>
          ))}
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default GameStructure
