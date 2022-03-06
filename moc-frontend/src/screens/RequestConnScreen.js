import React, {  useState } from 'react'
import {  Button, Modal } from 'react-bootstrap'


function RequestConnScreen() {

    const vessel = 
        {
            'name' : 'Titanic',
            'mmsi' : 120334891,
            'mrn' : '',
            'height' : 5.7,
            'width' : 8.4,
            'length' :  15,
            'front_image' : '/images/front.jpg',
            'back_image' : '/images/back.jpg',
        }
        
        
       
        
            const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
          
            return (
              <>
                <Button variant="primary" onClick={handleShow}>
                  Launch demo request
                </Button>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>New connection request</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <b>Vessel name: </b>
                      {vessel.name}
                      
                    </Modal.Body>
                  <Modal.Footer>
                    
                    <div class="btn-group bt-group-lg" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-danger">Deny</button>
                        <button type="button" class="btn btn-warning">Authentificate and accept</button>
                        <button type="button" class="btn btn-primary">Accept</button>
                    </div>
                      
                  </Modal.Footer>
                </Modal>
              </>
            );
          }
          
        
export default RequestConnScreen
