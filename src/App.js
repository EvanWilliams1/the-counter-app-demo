import React, { Component } from 'react';
import Nav from './Nav';

class App extends Component{
  constructor(props){
    super();
  }
  render(){
    return (
      <div className='container'>
        <Nav />
        <h1>The Counter App</h1>
        { this.props.children } 
      </div> 
    );
  }
}

export default App;
