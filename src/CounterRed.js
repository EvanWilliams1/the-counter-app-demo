import React, { Component } from 'react';
import store, {incrementRed} from './store';



class CounterRed extends Component{
  constructor(){
    super();
    this.state = { count: store.getState().red };
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=> this.setState({ count: store.getState().red }));
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){ 
    const { count } = this.state;
    return (
      <button className='btn btn-danger' onClick={ incrementRed }>{ count }</button>
    );
  }
};

export default CounterRed;
