import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {
       constructor(props) {
              super(props);
              this.state = {  }
       }
       render() { 
              return ( 
                     <div>
                            <h1>Welcome Home</h1>
                            <Link to='/submit'><button> Submit Report</button></Link>
                     </div>
                     
               );
       }
}
 
export default Home