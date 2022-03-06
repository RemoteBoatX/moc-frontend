import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

class Conning extends React.Component {
  
    constructor(props){
        super(props)
    }

    render() {

        let conning = this.props.conning
        let position = conning["position"]
        let propulsion = conning["propulsion"]
        let steering = conning["steering"]
        return (
            
            <Card className='my-3 p-3 rounded'>
                <Col>
                    <h5>Conning</h5>
                    
                    <Row>
                        <Col>
                            <i>Latitude:</i>
                        </Col>
                        <Col>
                            {conning["lat"]}
                        </Col>           
                    </Row>

                    <Row>
                        <Col>
                            <i>Depth:</i>
                        </Col>
                        <Col>
                            {conning["depth"]}
                        </Col>        
                    </Row>

                    <Row>
                        <Col>
                            <i>Longitude:</i>
                        </Col>
                        <Col>
                            {conning["long"]}
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <i>Heading:</i>
                        </Col>
                        <Col>
                        {conning["heading"]}
                        </Col>
                    </Row>    

                    <Row>
                        <Col>
                            <i>Awa:</i>
                        </Col>
                        <Col>
                        {conning["awa"]}
                        </Col>
                    </Row>    

                    <Row>
                        <Col>
                            <i>Aws:</i>
                        </Col>
                        <Col>
                        {conning["aws"]}
                        </Col>
                    </Row>    

                    <Row>
                        <Col>
                            <i>Cog:</i>
                        </Col>
                        <Col>
                        {conning["cog"]}
                        </Col>
                    </Row>  

                    <Row>
                        <Col>
                            <i>Rot:</i>
                        </Col>
                        <Col>
                        {conning["rot"]}
                        </Col>
                    </Row>   

                    <Row>
                        <Col>
                            <i>Sog:</i>
                        </Col>
                        <Col>
                        {conning["sog"]}
                        </Col>
                    </Row>   

                    <Row>
                        <Col>
                            <i>Stw:</i>
                        </Col>
                        <Col>
                        {conning["stw"]}
                        </Col>
                    </Row>   

                </Col>
                <hr></hr>
                <Col>
                    <h5>Position</h5>
                    <Row>
                        <Col>
                            <i>Accuracy:</i>
                        </Col>
                        <Col>
                        {position["accuracy"]}
                        </Col>
                    </Row> 

                    <Row>
                        <Col>
                            <i>Hdop:</i>
                        </Col>
                        <Col>
                        {position["hdop"]}
                        </Col>
                    </Row> 

                    <Row>
                        <Col>
                            <i>Source:</i>
                        </Col>
                        <Col>
                        {position["source"]}
                        </Col>
                    </Row> 
                </Col>

                <hr></hr>

                <Col>
                    <h5>Propulsion</h5>
                    <Row>
                        <Col>
                            <b>Port</b>
                            <Row>
                                <Col>
                                    <i>Actual:</i>
                                </Col>
                                <Col>
                                    {propulsion["port"]["actual"]}
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col>
                                    <i>Dor:</i>
                                </Col>
                                <Col>
                                    {propulsion["port"]["dor"]}
                                </Col>
                            </Row> 

                            <Row>
                                <Col>
                                    <i>Rpm:</i>
                                </Col>
                                <Col>
                                    {propulsion["port"]["rpm"]}
                                </Col>
                            </Row> 

                            <Row>
                                <Col>
                                    <i>Set:</i>
                                </Col>
                                <Col>
                                    {propulsion["port"]["set"]}
                                </Col>
                            </Row> 

                            <Row>
                                <Col>
                                    <i>Type:</i>
                                </Col>
                                <Col>
                                    {propulsion["port"]["type"]}
                                </Col>
                            </Row> 

                        </Col>

                        <Col>
                            <b>Sb</b>

                            <Row>
                                <Col>
                                    <i>Actual:</i>
                                </Col>
                                <Col>
                                    {propulsion["sb"]["actual"]}
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col>
                                    <i>Rpm:</i>
                                </Col>
                                <Col>
                                    {propulsion["sb"]["rpm"]}
                                </Col>
                            </Row> 

                            <Row>
                                <Col>
                                    <i>Set:</i>
                                </Col>
                                <Col>
                                    {propulsion["sb"]["set"]}
                                </Col>
                            </Row> 

                            <Row>
                                <Col>
                                    <i>Type:</i>
                                </Col>
                                <Col>
                                    {propulsion["sb"]["type"]}
                                </Col>
                            </Row> 

                                                         
                        </Col>
                    </Row>
                </Col>

                <hr></hr>
                <Col>
                    <h5>Steering</h5>
                    <Row>
                        <Col>
                            <i>Mode:</i>
                        </Col>
                        <Col>
                            {steering["mode"]}
                        </Col>
                    </Row> 

                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <b>Port:</b>
                            </Col>
                        </Row> 

                        <Row>
                        <Col>
                            <i>Actual:</i>
                        </Col>
                        <Col>
                            {steering["port"]["actual"]}
                        </Col>
                    </Row> 

                    <Row>
                        <Col>
                            <i>Set:</i>
                        </Col>
                        <Col>
                            {steering["port"]["set"]}
                        </Col>
                    </Row> 

                    <Row>
                        <Col>
                            <i>Type:</i>
                        </Col>
                        <Col>
                            {steering["port"]["type"]}
                        </Col>
                    </Row> 
                    </Col>

                    <Col>
                        <Row>
                            <Col>
                                <b>Sb:</b>
                            </Col>
                        </Row> 

                        <Row>
                            <Col>
                                <i>Actual:</i>
                            </Col>
                            <Col>
                                {steering["sb"]["actual"]}
                            </Col>
                        <Row>
                            <Col>
                                <i>Set:</i>
                            </Col>
                            <Col>
                                {steering["sb"]["set"]}
                            </Col>
                        </Row> 

                        <Row>
                            <Col>
                                <i>Type:</i>
                            </Col>
                            <Col>
                                {steering["sb"]["type"]}
                            </Col>
                        </Row> 

                    </Row> 

                    </Col>
                </Row>   
                    
                </Col>
                

            </Card>
 
        )
    }
    
}

export default Conning;

/* 
                    

                                
                                
                                
                       
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
                       

                   
*/
