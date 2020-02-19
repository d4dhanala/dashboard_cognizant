import React, { Component } from "react";
import { Provider} from 'react-redux'
import configureStore from './redux/store'
import AppRouter from './router/appRouter'

class App extends Component {
  state = {
    value: "This was created without using create-react-app "
  };
  
  render() {
    return (
    
           
           <AppRouter/>
 
    )
  }
}


export default App;
