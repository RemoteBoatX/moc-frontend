import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Table, Form, Button, Card, ListGroupItem } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';

import vessels from '../vessels.js'

function ConVesselsScreen() {

    const navigate = useNavigate();

    

    return (
        <Col md={9}>
           <h1>Connected vessels</h1>

            <Table striped responsibe className='table-sm'>

                <tbody>
                    {vessels.map(vessel =>
                        <tr>
                            <td>{vessel.name}</td>
                            <td>74ms</td>
                            <td>120334891</td>
                            <td>
                            <Link to={`/vessel/${vessel.name}`}
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
