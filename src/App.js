import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login";
import { auth } from "./firebox";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe("pk_test_51Is02RSJ8ogBIzBEc7TerDc5mlgpnGT7unQ3t2Egds0mzZjKGM2dayg5xhAZvY3fdntZufKmOaTt6OUL517ecKOY00HeJhHCtz");
 

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
      //run once the app components loads
    auth.onAuthStateChanged(authUser => {
      console.log("the user is ", authUser);

      if (authUser) {
        //the user just logged in or was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
   }, []);
  return (
    <Router>
    <div className="app">
    
     <Switch>
     <Route path={"/payment"}>
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
     </Route>
      <Route path="/checkout">
        <Header />
        <Checkout />
      </Route>
      <Route path={"/login"}>
        <Login />
      </Route>
      <Route path="/">
          <Header />
          <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}


export default App;
