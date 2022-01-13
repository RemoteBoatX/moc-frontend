import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Table, Form, Button, Card, ListGroupItem } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';

function RequestConnScreen() {

    const vessel = 
        {
            'name' : 'Titanic',
            'mmsi' : 120334891,
            'mrn' : '',
            'height' : 5.7,
            'width' : 8.4,
            'length' :  15,
            'front_image' : '/images/front.jpg',
            'back_image' : '/images/back.jpg',
        }

    return (
        <Col>
            <Row>
                <h1>Connection request</h1>
            </Row>
            
            <Row>
                <Col>
                    <b>{vessel.name}    </b>
                    {vessel.mmsi}
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button variant='danger'>
                        Deny
                    </Button>  
                </Col>
                <Col>
                    <Button variant='warning'>
                        Authenticate and accept
                    </Button>  
                </Col>
                <Col>
                    <Button variant='warning'>
                        Accept
                    </Button>  
                </Col>
            </Row>
        </Col>
    )
}

export default RequestConnScreen
