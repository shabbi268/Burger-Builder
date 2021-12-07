import React, { Component } from 'react'
import classes from './Payment.css';
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useCheckout } from "./co";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    FormGroup,
    Button,
  } from "shards-react";

const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#495057",
        fontFamily: "inherit",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#6c757d",
        },
      },
      invalid: {
        color: "#dc3545",
        iconColor: "#dc3545",
      },
    },
  };



  const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const { checkoutSecret, billingDetails } = useCheckout();
  
    const paymentClickHandler = async () => {
      if (!stripe || !elements) {
        return;
      }
  
      const result = await stripe.confirmCardPayment(checkoutSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: billingDetails,
        },
      });
      console.log("🚀 ~ file: Payment.js ~ line 51 ~ paymentClickHandler ~ result", result)
  
      if (result.error) {
        alert(result.error.message);
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === "succeeded") {
          alert("Payment successful");
          window.location.href = "/orders";
        }
      }
    };
  
    return (
      <Card className="app-card">
        <CardHeader>
          <CardTitle>Complete Payment</CardTitle>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <div>
              <CardElement options={CARD_ELEMENT_OPTIONS} />
            </div>
          </FormGroup>
          <Button
            disabled={!stripe}
            block
            className="mt-4"
            onClick={paymentClickHandler}
          >
            <span className="font-weight-bold">Pay</span>
          </Button>
        </CardBody>
      </Card>
    );
  };
  
  export default Payment;

// export default class Payment extends Component {
//     paymentClickHandler = () => {
//         console.log("paymentClickHandler")
//     }


//     render() {
//         return (
//             <div>
//                 <div className = {classes.Payment}>
//                     PAYMENT
//                 </div>
//                 <Button 
//                 buttonType = "Danger" 
//                 style = {{color: 'black'}}
//                 clicked = {this.paymentCancelHandler}>Cancel</Button>
//                 <Button 
//                 buttonType = "Success"
//                 clicked = {this.paymentClickHandler}>Pay</Button>
//             </div>
//         )
//     }
// }
