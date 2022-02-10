import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React  from 'react';
import Header from './components/Header'


import ConVesselsScreen from './screens/ConVesselsScreen';
import VesselScreen from './screens/VesselScreen'
import RequestConnScreen from './screens/RequestConnScreen';

class App extends React.Component {
  
  
  constructor(props){
    super(props)
    this.state={
      dataFromServer : null,
      ws : null,
    }
    
  }
  
  
  componentDidMount() {
    
    const ws = new WebSocket(this.props.backendUrl)
    
    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }
    
    ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      
    }
    
    ws.onmessage  = (evt) => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data)
      console.log('mensaje',message)
      
      console.log('estado', this.state.dataFromServer)

      if(message["update"]){
        delete message["update"]
        for(let vesselId in message){
          const newState = {... this.state.dataFromServer[vesselId]}
          for(let messageKey in message[vesselId]){
            newState[messageKey] = message[vesselId][messageKey]
            this.setState({ 
              dataFromServer: {
                [vesselId]: newState
              }
            })
          } 
        }
      }
      else{
        delete message["update"]
        this.setState({dataFromServer: message})
        //console.log('else',this.state.dataFromServer)
      }
      /*
      if(message["update"]){
        console.log('m',message)
        delete message["update"]
        console.log('antes', this.state.dataFromServer)
        for (let vesselId in message){
          if(message[vesselId]["connected"]){
            let prevState = this.state.dataFromServer
            delete prevState[vesselId]
            this.setState({dataFromServer: prevState})
          }
          else{
            for(let messageKey in message[vesselId]){
              console.log('alex', message[vesselId][messageKey])
                this.setState({
                  dataFromServer: {
                    vesselId: {
                      messageKey: message[vesselId][messageKey]
                    }
                  }
                })
              
            }
          }
          console.log('despues', this.state.dataFromServer)
        }
        
      }else{
        delete message["update"]
        this.setState({dataFromServer: message})
        //console.log('else',this.state.dataFromServer)
      } */
      //console.log('estado',this.state.dataFromServer)
    }
    this.setState({ws:ws})
  }
  
  componentWillUnmount(){
    /*close websocket*/ 
  }
  
  render (){
    
    return(
      <Router>
      <Header />
      
      <Container>
      <main className='py-3'>
      <Routes>
      <Route path='/' element={<ConVesselsScreen info={this.state.dataFromServer}/>}/>
      <Route path='/vessel/:id' element={<VesselScreen info={this.state.dataFromServer}/>}/>
      <Route path='/request' element={<RequestConnScreen/>}/>
      </Routes>
      </main>
      
      </Container>
      </Router>
      )
    }
  }
  
  export default App
  