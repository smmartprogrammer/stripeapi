import * as React from "react"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckouForm from "../components/checkoutform";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function Home(){
  return <div>Hello World
    <Elements stripe={stripePromise} >
      <CheckouForm/>
    </Elements>
  </div>
}
