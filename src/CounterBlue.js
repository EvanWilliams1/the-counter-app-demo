import React, { Component } from 'react';
import store, {incrementBlue} from './store';



class CounterBlue extends Component{
  constructor(){
    super();
    this.state = { count: store.getState().blue};
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=> this.setState({ count: store.getState().blue }));
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){ 
    const { count } = this.state;
    return (
      <button className='btn btn-primary' onClick={ incrementBlue }>{ count }</button>
    );
  }
};

export default CounterBlue;
