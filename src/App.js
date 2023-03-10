import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Brandix from "./pages/Brandix";
import Chainsaw from "./pages/Chainsaw";
import Watertap from "./pages/Watertap";
import Angle from "./pages/Angle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import About from "./pages/About";
import Closeheader from "./components/Closeheader";

const promise = loadStripe(
  "pk_test_51HoXg1FCVdWTE2NY6JWDK6GZQvRYRWLeuNJi1KvAXpim1ug7m0NYYXycZN9DnTkqJacnZM7Jogq1TnuPwEwzjjQC00le10g9QK"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/watertap">
            <Watertap />
          </Route>
          <Route path="/chainsaw">
            <Chainsaw />
          </Route>
          <Route path="/angle">
            <Angle />
          </Route>
          <Route path="/brandix">
            <Brandix />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Closeheader />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Closeheader />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
