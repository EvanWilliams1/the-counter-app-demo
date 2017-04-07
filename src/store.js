import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import axios from 'axios';

const reducer = (state={ red: 0, blue: 0, products: []}, action)=> {
  console.log(action);
  switch(action.type){
    case 'INCREMENT_BLUE':
      state = Object.assign({}, state, { blue: state.blue + 1});
      break;
    case 'INCREMENT_RED':
      state = Object.assign({}, state, { red: state.red + 1});
      break;
    case 'INCREMENT_RED_BY_X':
      state = Object.assign({}, state, { red: state.red + action.x});
      break;
    case 'LOAD_PRODUCTS':
      state = Object.assign({}, state, { products: action.products });
      break;
  }
  return state;
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(()=> console.log(store.getState()));

const incrementRed = ()=> store.dispatch({ type: 'INCREMENT_RED'});
const incrementBlue = ()=> store.dispatch({ type: 'INCREMENT_BLUE'});

store.dispatch({ type: 'INCREMENT_RED_BY_X', x: 10});

store.dispatch((dispatch)=> {
  axios.get('/api/products')
    .then( response => response.data)
    .then( products => dispatch({ type: 'LOAD_PRODUCTS', products}));
});


export { incrementRed, incrementBlue };

export default store;
