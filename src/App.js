import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './Containers/CheckOut/CheckOut';
import { Route, Switch } from 'react-router-dom';
import Orders from './Containers/Orders/Orders';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutProvider } from "./Containers/CheckOut/Payment/co";


const stripePromise = loadStripe("pk_test_51IfXELKvMhoTZnkA3kUQTzbq7qVi0eRtPgNU4r6ONbVjoGjDPWgbi5gyiebtXyclkDuhXMJtDUyu2oj6MiGyyosr001SsDnqxV");

export default function App() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutProvider>
          <Layout>
            <Switch>
              <Route path = "/checkout" component = {CheckOut}></Route>
              <Route path = "/orders" exact component = {Orders}></Route>
              <Route path = "/" exact component = {BurgerBuilder}></Route>
              {/* <BurgerBuilder></BurgerBuilder>
              <CheckOut></CheckOut> */}
            </Switch> 
          </Layout>
        </CheckoutProvider>
      </Elements>
    </div>
  )
}
