import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Profile from './Containers/Profile';
import Orders from './Containers/Orders';
import './App.css'
import OrderDetails from './Containers/OrderDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/orders" component={Orders} />
          <Route path="/order-details" component={OrderDetails} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

