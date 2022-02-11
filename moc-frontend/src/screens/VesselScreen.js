import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Table, Form, Button, Card, ListGroupItem } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';

import VesselInfo from '../components/VesselInfo.js';
import Conning from '../components/Conning.js';
import Camara from '../components/Camara.js';

class VesselScreen extends React.Component {

    constructor(props){
        super(props)
    }
    
       
    render(){

    let urlElements = window.location.href.split('/')
    let vesselMmsi = urlElements[urlElements.length-1]

    let streams = this.props.info[vesselMmsi]["vessel"]["streams"]
    let latency = this.props.info[vesselMmsi]["latency"]["roundTrip"]
    let conning = this.props.info[vesselMmsi]["conning"]
    console.log("vesselScreen", this.props.info)
    

    return (
        
       <Col>
            <Row>
                <Col>
                    <h1>{vesselMmsi}</h1>
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
                    <Row> <b>Request conning to see the information </b> </Row>
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

export default VesselScreen

/* 

{vessel.simulation
                        ? <i>Simulation</i>
                        : console.log('real boat')
                    }
*/
/* 

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
*/
