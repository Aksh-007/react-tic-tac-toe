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
        setIsCross(false);
        setWinMessage("");
        itemArray.fill("empty", 0, 9);
    };

    const checkIsWinner = () => {
        //  checking  winner of the game
    }
    const changeItem = itemNumber => {
        if (winMessage) {
            return toast(winMessage, { type: "success" });
        }

        if (itemArray[itemNumber] === "empty") {
            itemArray[itemNumber] = isCross ? "cross" : "circle";
            setIsCross(!isCross);
        } else {
            return toast("already filled", { type: "error" });
        }

        checkIsWinner();
    };

    return (
        <Container className="p-5">
            <ToastContainer position="bottom-center" />
            <Row>
                <Col md={6} className="offset-md-3">
                    {winMessage ? (
                        <div className="mb-2 mt-2">
                            <h1 className="text-success text-uppercase text-center">
                                {winMessage}
                            </h1>
                            <Button color="success" block onClick={reloadGame}>
                                Reload the game
                            </Button>
                        </div>
                    ) : (
                        <h1 className="text-center text-warning">
                            {isCross ? "Cross" : "Circle"} turns
                        </h1>
                    )}
                    <div className="grid">
                        {itemArray.map((item, index) => (
                            <Card color="warning" onClick={() => changeItem(index)}>
                                <CardBody className="box">
                                    <Icon name={item} />
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default GameStructure;
