import React from 'react'
import VesselInfo from '../components/VesselInfo.js';
import Conning from '../components/Conning.js';
import Camara from '../components/Camara.js';

import { Row, Col, Form, Button, Card } from 'react-bootstrap'

class Vessel extends React.Component{

    
    render (){
        let streams = this.props.info["vessel"]["streams"]
        let latency = this.props.info["latency"]["roundTrip"]
        let conning = this.props.info["conning"]

        return (
            <Col>
            <Row>
            <Col>
            <h1>{this.props.vesselId}</h1>
            </Col>
            
            <Col>
            <Button
            className="btn btn-danger float-end"
            >Terminate</Button>
            </Col>
            
            </Row>
            
            <Row>
            <Card className='my-3 p-3 rounded'>
            
            <Row>
            <Col>
            <VesselInfo ></VesselInfo>
            </Col>
            
            <Col>
            <p
            className="text-warning text-end"
            >
            {latency}
            </p>
            
            </Col>
            </Row>
            
            <Row>
            
            
            </Row>
            
            </Card>
            </Row>
            
            <Row>
            {conning
                ?(
                    <Col md={6}>
                    <Conning conning= {conning}></Conning>
                    </Col>
                    )
                    :
                    (
                        <Row> <b>Waiting for conning </b> </Row>
                        )
                    }
                    
                    <Col md = {6}>
                    <Row>
                    <Col > 
                    <Card className='my-3 p-3 rounded'>
                    <h5>Guidance</h5>
                    <Form>
                    <Form.Group>
                    <div className='mb-3'>
                    <textarea
                    rows="5">
                    
                    </textarea>
                    </div>
                    
                    </Form.Group>
                    
                    <Button type='submit' variant='primary'>
                    Send
                    </Button>   
                    </Form>
                    </Card>
                    </Col>
                    </Row>
                    {streams["camera"]
                    ?(
                        <Row>
                        <Col>
                        <Camara></Camara>
                        </Col>
                        </Row>
                        )
                        :( 
                            <Col>
                            <Card className='my-3 p-3 rounded'>
                            <Row>
                            <b>Camera not available</b>
                            </Row>
                            </Card>
                            
                            </Col>
                            )
                        }
                        
                        {streams["radar"]
                        ?(
                            <Row>
                            <Col>
                            <h6>Radar</h6>
                            </Col>
                            </Row>
                            )
                            :( 
                                <Col> 
                                <Row>
                                <Card className='my-3 p-3 rounded'>
                                <b>Radar not available</b>
                                </Card>
                                </Row>
                                </Col>
                                )
                            }
                            
                            </Col>
                            </Row>
                            
                            </Col>
                            )
                        }
                        
                    }
                    export default Vessel;
                    