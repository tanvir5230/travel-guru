import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import BookingDetails from "./components/BookingDetails/BookingDetails";
import NoRoute from "./components/NoRoute/NoRoute";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/places/:id">
            <BookingDetails />
          </Route>
          <Route path="*">
            <NoRoute />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
