import React from 'react'
import {  Col, Table } from 'react-bootstrap'
import VesselRow from '../components/VesselRow'



class ConVesselsScreen extends React.Component {    
    
    render(){
        
        const items = []

        for (let vesselId in this.props.info){
            let vesselInfo = this.props.info[vesselId]
            items.push(
                <VesselRow vesselInfo = {vesselInfo} vesselId = {vesselId}></VesselRow>
                )
        }
        return (
            
            <Col>
            <h1>Connected vessels</h1>
            <Table responsive hover>
                <thead>
                    <tr>
                        <th>Vessel id</th>
                        <th>Latency</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </Table>
                
            </Col>
            
            
            )
        }
    }
    export default ConVesselsScreen
