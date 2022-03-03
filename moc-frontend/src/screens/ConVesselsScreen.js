import React from 'react'
import {  Col, Table } from 'react-bootstrap'
import RowTable from '../components/RowTable'



class ConVesselsScreen extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    
    render(){
        
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
