import React, { Component } from 'react';
import store from './store';



class Products extends Component{
  constructor(){
    super();
    this.state = {products: store.getState().products};
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=> this.setState({ products: store.getState().products }));
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){ 
    return (
      <div>
        { this.state.products.length }
        <ul>
        {
          this.state.products.map( product => <li key={ product.id}>{ product.name }</li>)
        }
        </ul>
      </div>
    );
  }
};

export default Products;
