import React, {Component}  from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
  } from 'react-router-dom'
import Home from '../components/PM/Home'
import SubmitReport from '../components/PM/SubmitReport'
//import PrimarySearchAppBar from '../components/navBar/navBar'


  export default class AppRouter extends Component {
      render() {
          return(
            <Router>
                 {/* <PrimarySearchAppBar/> */}
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/submit' component={SubmitReport}/>
               
              
                {/* <Route path='/login' component={Login}/>
      
                <Route path='/producttitle' component = {ProductTitle}/>
      
                <Route path='/cartPage' component = {Cart} /> */}
                  
            </Switch>
            
          </Router>

          )
      }
  }
