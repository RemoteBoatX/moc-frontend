import React from 'react';
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'

class RowTable extends React.Component {
  
  constructor(props){
    super(props)
    
  }

  render (){
    
      return (
        <tr key={this.props.vesselId}>
            <td>
                {this.props.vesselId}
            </td>

            <td>
                {this.props.latency}ms
            </td>

            <td>
            <Link to={`/vessel/${this.props.vesselId}`}
            className= 'btn btn-outline-primary btn-block my-1' role="button" aria-pressed="true">Guide</Link>
            </td>
        
    </tr>
      )
  }
}

export default RowTable;

/* <Link to={`/vessel/${this.props.vesselId}`}
            className= 'btn btn-outline-primary btn-block my-1' role="button" aria-pressed="true">Guide</Link>*/