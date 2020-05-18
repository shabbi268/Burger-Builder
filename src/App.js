import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './Containers/CheckOut/CheckOut';
import { Route, Switch } from 'react-router-dom';
import Orders from './Containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Switch>
          <Route path = "/checkout" component = {CheckOut}></Route>
          <Route path = "/orders" exact component = {Orders}></Route>
          <Route path = "/" exact component = {BurgerBuilder}></Route>
          {/* <BurgerBuilder></BurgerBuilder>
          <CheckOut></CheckOut> */}
        </Switch> 
        </Layout>
      </div>
    );
  }
}

export default App;
