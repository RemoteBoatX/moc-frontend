import React from 'react';
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'


class VesselRow extends React.Component {
  
  render (){
    
    //console.log("estado en tabla", this.props.vesselInfo)
    let latency = 0
    if(this.props.vesselInfo["latency"]){
      latency = this.props.vesselInfo["latency"]["roundTrip"]
      //console.log('latency',latency)
    }
    
    return (
      <tr key={this.props.vesselId}>
        <td>
          <Link to={`/vessel/${this.props.vesselId}`}
            className= 'text-dark' aria-pressed="true"
          >{this.props.vesselId}</Link>
        </td>
        
        <td>
          {latency}ms
        </td>

      </tr>
      
      )
      
      
    }
  }
  
  export default VesselRow;
  
  /*
  
  
  <Link to={`/vessel/${this.props.vesselId}`}
  className= 'btn btn-outline-primary btn-block my-1' role="button" aria-pressed="true">Guide</Link>*/