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
    
  }
  /*
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
      }

      this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss

      }
    }
    */
    
  
  

 render (){
 
   return(
      <Router>
      <Header />

      <Container>
        <main className='py-3'>
          <Routes>
            <Route path='/' element={<ConVesselsScreen/>}/>
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
