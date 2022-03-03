import React from 'react'

import Vessel from '../components/Vessel.js'

class VesselScreen extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    
    render(){
        
        let urlElements = window.location.href.split('/')
        let vesselMmsi = urlElements[urlElements.length-1]
        
        let vessel 
        
        for (let vesselId in this.props.info){
            if(vesselId == vesselMmsi){
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
                
                let streams = this.props.info[vesselMmsi]["vessel"]["streams"]
                let latency = this.props.info[vesselMmsi]["latency"]["roundTrip"]
                let conning = this.props.info[vesselMmsi]["conning"]
                
                return (
                    
                    <Vessel vesselId = {vesselMmsi} streams = {streams} latency = {latency} conning={conning}></Vessel>
                    
                    )
                }
            }
        }
        export default VesselScreen
        