import React from 'react'
import {  Col, Row, Table } from 'react-bootstrap'
import RowTable from '../components/RowTable'



class ConVesselsScreen extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    
    render(){
        //console.log('props',this.props.info)
        const items = []

        for (let vesselId in this.props.info){
            let vesselInfo = this.props.info[vesselId]
            items.push(
                <RowTable vesselInfo = {vesselInfo} vesselId = {vesselId}></RowTable>
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
                        <th>Guidance</th>
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
    
    