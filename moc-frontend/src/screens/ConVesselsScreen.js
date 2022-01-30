import React from 'react'
import { Link } from 'react-router-dom'
import {  Col, Table } from 'react-bootstrap'


import vessels from '../vessels.js'

class ConVesselsScreen extends React.Component {

    constructor(props){
        super(props)
        
      }
      ws = new WebSocket("ws://localhost:8080/frontend")
  
      componentDidMount() {
      
        this.ws.onopen = () => {
          // on connecting, do nothing but log it to the console
          console.log('connected')
          }
    
          this.ws.onmessage = evt => {
          // listen to data sent from the websocket server
          const message = JSON.parse(evt.data)
          this.setState({dataFromServer: message})
          console.log(message)
          const messageData = JSON.parse(evt.data)
            for (vesselId in messageData) {
                console.log('lo hace'
                )
            }
          /*this.handleMessage(evt.data)*/

          console.log(message[1])
          }
    
          this.ws.onclose = () => {
          console.log('disconnected')
          // automatically try to reconnect on connection loss
    
          }

          
          }
        

   /*handleMessage(data){
            const messageData = JSON.parse(data)
            for (vesselId in messageData) {
                console.log('lo hace'
                )
                 
            
                const message = messageData[0];
              if (message.connected === true) {
                    this.addVessel(vesselId)
                   
                }
                console.log('vessel', message)
           }
        }*/

       /* addVessel(vesselId){
            console.log('añadido',vesselId)
        }
*/
    
    render(){
    return (
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
    )
    }

}
export default ConVesselsScreen

