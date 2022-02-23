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
      
      delete message["update"]
      if(this.state.dataFromServer == null){
        
        console.log('estado null')
        //state is null, change to empty
        this.setState({dataFromServer: message})

      } else{

      if(Object.keys(this.state.dataFromServer).length == 0){
        console.log('estado vacio')
        //state is empty. rewrite the state
        
        this.setState({dataFromServer: message})

      }  else{
        
         //state is not null, update state
        console.log('estado con algo')
        let inTheList = false

        //check if the vessel is already connecter or is new
        for(let vessel in message){
          for(let vesselId in this.state.dataFromServer){
            if(vessel == vesselId){
              console.log('si que esta')
              inTheList = true
              let updatedState = { ... this.state.dataFromServer[vesselId]}
              //vessel found, now update the new info
              for(let messageKey in message[vessel]){
                updatedState[messageKey] = message[vessel][messageKey]
                
              }
              this.setState({ 
                dataFromServer: {
                  [vesselId]: updatedState
              }
              })
              break;
            }
          }
        }
        //the vessel is not in the list
        if(inTheList === false){

          console.log('entra aqui')
          console.log('estado en el else', this.state.dataFromServer)
          let updatedState = { ... this.state.dataFromServer}
          console.log('upsta primero', updatedState)
          for ( let vessel in message){
            updatedState[vessel] = message[vessel]
          }
          console.log('updstate', updatedState)
          this.setState({
            dataFromServer: 
              updatedState
            

          })
        }
    }
  }
      
/*
      let newState = {}
      delete message["update"]
      if (this.state.dataFromServer == null) 
        {
            newState = {}
        
        }else{
          newState = {... this.state.dataFromServer}
        }

      let inTheList = false
      for (let vessel in message){

        console.log('vessel', vessel)
        console.log('m', message[vessel])
       for (let vesselId in this.state.dataFromServer){
         console.log('2', vesselId)
         console.log('gabi', vesselId)
          if(vesselId == vessel){
            inTheList = true
            console.log('alex', vesselId)
            for(let messageKey in message[vessel]){
              console.log('alex', messageKey)
              newState[vesselId][messageKey] = message[messageKey]
            }
              
              break
            } 
          }
        
          

        
      console.log('hello', inTheList)
            if(inTheList === false){
              console.log('h', message[vessel])
              newState = {... {[vessel] : message[vessel]}}
            }
      }
        this.setState({ 
          dataFromServer: 
            newState
          
        })
        
      }
      console.log('state', this.state.dataFromServer)

    /*
        let newState = {}
        if (this.state.dataFromServer == null) 
        {
            newState = {}
        
        }else{
          newState = {... this.state.dataFromServer}
        }

        if (message["update"]){
          for(let messageKey in message){
            newState[messageKey] = message[messageKey]
            this.setState({ 
              dataFromServer: {
                [vesselId]: newState
              }
            })
          } 
        }
        else {
          delete message["update"]
          newState = {... message}
          
        }
        
      
      /*
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
        for(let vesselId in message){
          const newState = {... this.state.dataFromServer[vesselId]}
        
        }

        this.setState({dataFromServer: message})
        //console.log('else',this.state.dataFromServer)
      }*/
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
  