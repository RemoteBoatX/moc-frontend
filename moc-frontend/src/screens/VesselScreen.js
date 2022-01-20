import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Table, Form, Button, Card, ListGroupItem } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';

import vessels from '../vessels.js'



function VesselScreen() {

    let urlElements = window.location.href.split('/')
    let vesselMmsi = urlElements[urlElements.length-1]

    let vessel
    
    let i = 0
    while (i<vessels.length && vesselMmsi !== vessels[i].mmsi){
        i++
    }
    if(i<vessels.length){
        vessel = vessels[i]
    }
    
    
       
    
    return (
        <Col>
            <Row>
                <Col>
                    {vessel.name
                        ? (<Row>  
                                <h1>{vessel.name}</h1>
                                <h3>mmsi: {vessel.mmsi}</h3>
                            </Row>)

                        : <h1>mmsi: {vessel.mmsi}</h1>
                    }
                    {vessel.simulation
                        ? <i>Simulation</i>
                        : console.log('real boat')
                    }
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
                        {vessel.from_above
                            ?(
                                <Col>
                                    <Image src={vessel.from_above} alt='front' fluid rounded />
                                </Col>
                            )
                            : console.log('no info')
                        }

                        {vessel.from_above
                            ?(
                                <Col>
                                    <Image src={vessel.from_abaft} alt='front' fluid rounded />
                                </Col>
                            )
                            : console.log('no info')
                        }
                            


                        <Col>

                            {vessel.call
                                ?(
                                    <Col>
                                        <b>call:</b> {vessel.call}  
                                    </Col>
                                ):(
                                    console.log('no info')
                                )
                            }

                                <Col>
                                    <b>loa:</b> {vessel.loa}  
                                </Col>

                                <Col>
                                    <b>breadth:</b> {vessel.breadth}  
                                </Col>
                               
                                <Col>
                                    <b>height:</b> {vessel.heigth}  
                                </Col>

                                <Col>
                                    <b>draft:</b> {vessel.draft}  
                                </Col>

   
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
                                    <Col>
                                        <i>Latitude:</i>
                                    </Col>
                                    <Col>
                                        {vessel.infoSteams.latitude}
                                    </Col>
                               
                                </Row>

                                <Row>
                                    <Col>
                                        <i>Longitude:</i>
                                    </Col>
                                    <Col>
                                        {vessel.infoSteams.longitude}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <i>Heading:</i>
                                    </Col>
                                    <Col>
                                        {vessel.infoSteams.heading}
                                    </Col>
                                </Row>
                                
                                
                            </Col>

                            {vessel.infoSteams.compass
                                ? (
                                    <Col>
                                        <h6>Compass</h6>
                                    </Col>
                                )
                                : console.log('no compass')
                            }

                            {vessel.infoSteams.camera
                                ? (
                                    <Col>
                                        <h6>Camera</h6>
                                        <Button
                                            type="button" className="btn btn-danger btn-sm"
                                        >Request</Button>
                                    </Col>
                                )
                                : console.log('no camera')
                            }

                            {vessel.infoSteams.lidar
                                ? (
                                    <Col>
                                        <h6>Lidar</h6>
                                        <Button
                                            type="button" className="btn btn-danger btn-sm"
                                        >Request</Button>
                                    </Col>
                                )
                                : console.log('no lidar')
                            }

                            {vessel.infoSteams.audio
                                ? (
                                    <Col>
                                        <h6>Audio</h6>
                                        <Button
                                            type="button" className="btn btn-danger btn-sm"
                                        >Request</Button>
                                    </Col>
                                )
                                : console.log('no lidar')
                            }

                            {vessel.infoSteams.radar
                                ? (
                                    <Col>
                                        <h6>Radar</h6>
                                        <Button
                                            type="button" className="btn btn-danger btn-sm"
                                        >Request</Button>
                                    </Col>
                                )
                                : console.log('no lidar')
                            }
                           

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
