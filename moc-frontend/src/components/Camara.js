import React from 'react';
import { Row, Col, ListGroup, Image, Table, Form, Button, Card, ListGroupItem } from 'react-bootstrap'

class Camara extends React.Component {
  
    constructor(props){
        super(props)
    }


    render (){
        return (
            <Card className='my-3 p-3 rounded'>
                <Col>
                <h6>Camera</h6>
                    <Button
                        type="button" className="btn btn-danger btn-sm"
                    >Request</Button>
                </Col>
            </Card>
        )
    }
}

export default Camara;
