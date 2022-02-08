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
      //console.log(message)
      
      if(message["update"]){
        delete message["update"]
        for (let vesselId in message){
          for(let messageKey in message[vesselId]){
            this.setState((previousState, currentProps)=> {
              if(!previousState[vesselId]){
                previousState[vesselId] = {}
              }
              previousState[vesselId][messageKey] = message[vesselId][messageKey]
              console.log('estado',this.state.dataFromServer)
            })
          }
        }
        
      }else{
        delete message["update"]
        this.setState({dataFromServer: message})
        
      }
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
      <Route path='/vessel/:id' element={<VesselScreen/>}/>
      <Route path='/request' element={<RequestConnScreen/>}/>
      </Routes>
      </main>
      
      </Container>
      </Router>
      )
    }
  }
  
  export default App
  