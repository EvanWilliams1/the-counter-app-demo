import React, { Component } from 'react';
import { Link } from 'react-router';
import store from './store';

class NavContainer extends Component{
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=> this.setState(store.getState()));
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    return (
      <Nav red={ this.state.red} blue={ this.state.blue } products={ this.state.products }/>
    );
  }
}

const Nav = ( { red, blue, products })=> (
  <div className='container'>
    <Link to='/'>Home</Link>
    {' | ' }
    <Link to='/red'>Red ({ red })</Link>
    {' | ' }
    <Link to='/blue'>Blue ({ blue })</Link>
    {' | ' }
    <Link to='/products'>Products ({ products.length})</Link>
  </div>
);

export default NavContainer;
