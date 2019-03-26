import React, { Suspense, Component } from 'react';
import "./App.css";
import {hot} from "react-hot-loader";


const _ = import('lodash').then( _ => {
  console.log(_.join(['Another', 'module', 'loaded!'], ' qqeqweq'));
});

const  OtherComponent =  React.lazy(() => import('./print'));

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      cargado: false
    }
  }
  render(){
    return(
      <div className="App">
        <h1> Hello, World! sssssss</h1>
        <button ref={e => this.miButton = e}>
          presiona aquidsss
        </button>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      </div>
    );
  }
  componentWillMount(){
   
  }
  componentDidMount(){
    
  } 
}

export default hot(module)(App);