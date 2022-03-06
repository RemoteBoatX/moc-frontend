import React from 'react'

import Vessel from '../components/Vessel.js'

class VesselScreen extends React.Component {
    
    render(){
        
        let urlElements = window.location.href.split('/')
        let vesId = urlElements[urlElements.length-1]
        
        let vessel 
        
        for (let vesselId in this.props.info){
            if(vesselId == vesId){
                vessel = this.props.info[vesselId]
                break;
            }
        }
        
        
        if(vessel == null){
            return ( 
                <div> 
                vessel not found
                </div>
                )
            }
            else {
                
                
                return (
                    
                    <Vessel info = {vessel} vesselId = {vesId}></Vessel>
                    
                    )
                }
            }
        }
        export default VesselScreen
        