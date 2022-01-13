import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React  from 'react';
import Header from './components/Header'


import ConVesselsScreen from './screens/ConVesselsScreen';
import VesselScreen from './screens/VesselScreen'
import RequestConnScreen from './screens/RequestConnScreen';

function App() {
  return (
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
     


  );
}

export default App;
