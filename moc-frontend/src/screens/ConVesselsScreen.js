import React from 'react'
import { Link } from 'react-router-dom'
import {  Col, Table } from 'react-bootstrap'


import vessels from '../vessels.js'

function ConVesselsScreen() {

    
    return (
        <Col md={9}>
           <h1>Connected vessels</h1>

            <Table striped responsive className='table-sm'>

                <tbody>
                    {vessels.map(vessel =>
                        <tr>
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
    )
}

export default ConVesselsScreen
