import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  Col, Row, Table } from 'react-bootstrap'


import vessels from '../vessels.js'

class ConVesselsScreen extends React.Component {
    
    constructor(props){
        super(props)
        
    }
    
    
    componentDidMount(){
        const ves = new Array()
        const info = this.props.info
        for(let vesselId in info){
            ves.push(vesselId)
            console.log(ves)
        }
    }
    
    
    render(){
        const list = []
        {this.props.info
            ?(
                list = this.props.info.map(vessel => {
                    
                })
                ):(
                    console.log('nada')
                    )}
                    
                    return (
                        <h1>{list}</h1>
                        )
                    } 
                }
                export default ConVesselsScreen
                
                /* 
                <Col>
                <h1>Connected vessels</h1>
                <Table responsive hover>
                <thead>
                <tr>
                <th>Vessel name</th>
                <th>Latency</th>
                <th>Mmsi</th>
                <th>Guidance</th>
                </tr>
                </thead>
                <tbody>
                {vessels.map(vessel =>
                    <tr key={vessel.mmsi}>
                    {vessel.name
                        ?   <td>{vessel.name}</td>
                        :   <td>{vessel.mmsi}</td>
                    }
                    
                    <td>74ms</td>
                    <td>{vessel.mmsi}</td>
                    <td>
                    <Link to={`/vessel/${vessel.mmsi}`}
                    className= 'btn btn-outline-primary btn-block my-1' role="button" aria-pressed="true">Guide</Link>
                    </td>
                    </tr>
                    )
                }
                </tbody>
                </Table>
                </Col>
                */
                
                