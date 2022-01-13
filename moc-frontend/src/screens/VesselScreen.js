import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Table, Form, Button, Card, ListGroupItem } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';

import vessels from '../vessels.js'



function VesselScreen() {

    let urlElements = window.location.href.split('/')
    let vesselName = urlElements[urlElements.length-1]

    let vessel

    let i = 0
    while (i<vessels.length && vesselName !== vessels[i].name){
        i++
    }
    if(i<vessels.length){
        vessel = vessels[i]
    }
       
    
    return (
        <Col>
            <Row>
                <Col>
                    <h1>{vessel.name}</h1>
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
                            <h5>Vessel information</h5>
                            
                            </Col>

                            <Col>
                            <p
                                class="text-warning text-end"
                                >
                                    34ms
                                </p>
                            
                            </Col>
                        </Row>
                       
                        
                    
                    
                    <Row>
                            <Col>
                                <Image src={vessel.front_image} alt='front' fluid rounded />
                            </Col>

                        <Col>
                            <Image src={vessel.back_image} alt='back' fluid rounded />
                        </Col>

                        <Col>
                            {vessel.mmsi
                                ?(
                                    <Col>
                                        <b>mmsi:</b> 
                                        {vessel.mmsi}  
                                    </Col>
                                ):(
                                    console.log('no info')
                                )
                            }

                            {vessel.mrn
                                ?(
                                    <Col>
                                        <b>mrn:</b> {vessel.mrn}  
                                    </Col>
                                ):(
                                    console.log('no info')
                                )
                            }

                            {vessel.height
                                ?(
                                    <Col>
                                        <b>height:</b> {vessel.height}  
                                    </Col>
                                ):(
                                    console.log('no info')
                                )
                            }

                            {vessel.width
                                ?(
                                    <Col>
                                        <b>width:</b> {vessel.width}  
                                    </Col>
                                ):(
                                    console.log('no info')
                                )
                            }

                            {vessel.length
                                ?(
                                    <Col>
                                        <b>length:</b> {vessel.length}  
                                    </Col>
                                ):(
                                    console.log('no info')
                                )
                            }
   
                        </Col>
                    </Row>
                    
                </Card>
            </Row>

            <Row>
                <Col md={8}>
                    <Card className='my-3 p-3 rounded'>
                        <h5>Information streams</h5>
                        <Row>

                            <Col>
                                <h6>Conning</h6>
                                <Row>
                                <i>Latitude:</i>
                                </Row>

                                <Row>
                                <i>Longitude:</i>
                                </Row>

                                <Row>
                                <i>Heading:</i>
                                </Row>
                                
                                
                            </Col>

                            <Col>
                                <h6>Compass</h6>
                            </Col>

                            <Col>
                                
                                <h6>Camera</h6>
                                <Button
                                    type="button" className="btn btn-danger btn-sm"
                                    >Stop</Button>
                                
                                
                            </Col>

                            <Col>
                                <h6>Lidar</h6>
                                <Button
                                    type="button" className="btn btn-danger btn-sm"
                                    >Request</Button>
                            </Col>

                        </Row>
                       

                    </Card>
                </Col>

                <Col md = {4}> 
                    <Card className='my-3 p-3 rounded'>
                        <h5>Guidance</h5>
                        <Form>
                            <Form.Group>
                                <div class='mb-3'>
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
        </Col>
    )
}

export default VesselScreen
