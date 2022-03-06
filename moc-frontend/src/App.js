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
      dataFromServer : {},
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
      this.setState({dataFromServer: {}})
      // automatically try to reconnect on connection loss
      
    }
    
    ws.onmessage  = (evt) => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data)
      
      if(message["update"] == false){
        delete message["update"]
        this.setState({dataFromServer: message})
      }
      
      else{
        delete message["update"]
        
        if(Object.keys(this.state.dataFromServer).length == 0){
          //state is empty. rewrite the state
          this.setState({dataFromServer: message})
        }  
        
        else{
          //state is not empty, update state
          let inTheList = false
          
          //check if the vessel is disconnected
          let disconnected = false
          for(let vessel in message){
            if(message[vessel]["connected"] === false){
              //the vessel is disconected, delete from the list
              disconnected = true
              let updatedState = { ... this.state.dataFromServer}
              delete updatedState[vessel]
              this.setState({ 
                dataFromServer: updatedState
              })
              break;
            }
          }
          
          if(disconnected === false){
            //vessel connected
            for(let vessel in message){
              //check if the vessel is already connected or is new
              for(let vesselId in this.state.dataFromServer){
                if(vessel == vesselId){
                  //vessel found, now update the new info
                  inTheList = true
                  let updatedState = { ... this.state.dataFromServer}
                  for(let messageKey in message[vessel]){
                    updatedState[vesselId][messageKey] = message[vessel][messageKey]
                  }
                  
                  this.setState({ 
                    dataFromServer:  updatedState
                    
                  })
                
                  break;
                }
              }
            }
            //the vessel is not in the list
            if(inTheList === false){
              let updatedState = { ... this.state.dataFromServer}
              for (let vessel in message){
                updatedState[vessel] = message[vessel]
              }
              
              this.setState({
                dataFromServer: 
                updatedState
              })
            }
          }
        }
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
  