import React, { Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import CounterRed from './CounterRed';
import CounterBlue from './CounterBlue';
import Products from './Products';



const root = document.getElementById('root');

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='red' component={ CounterRed } />
      <Route path='blue' component={ CounterBlue } />
      <Route path='products' component={ Products } />
    </Route>
  </Router>
);



render(router, root);
