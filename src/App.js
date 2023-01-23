import './App.css';
import Icon from './components/Icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const itemArray = new Array(9).fill('empty');

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    //
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
          <div className=''>

          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
