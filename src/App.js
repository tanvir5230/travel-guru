import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import BookingDetails from "./components/BookingDetails/BookingDetails";
import NoRoute from "./components/NoRoute/NoRoute";
import { createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HotelBooking from "./components/HotelBooking/HotelBooking";

firebase.initializeApp(firebaseConfig);
export const Store = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    origin: "Dhaka",
    destination: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleSignUpWithEmail = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => console.log(res))
      .catch((err) => {
        alert(err.message);
      });
  };
  const handleSignUpWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        setLoggedInUser(res.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handleSignUpWithFb = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        setLoggedInUser(res.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handleLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setLoggedInUser(res.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .catch((err) => {
        alert("could not sign out.");
        console.log(err.message);
      });
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedInUser(user);
      } else {
        setLoggedInUser(user);
      }
    });
  });
  return (
    <>
      <Store.Provider
        value={{
          loggedInUser: loggedInUser,
          bookingInfo: {
            bookingDetails: bookingDetails,
            setBookingDetails: setBookingDetails,
          },
          handleLogin: handleLogin,
          handleSignUpWithEmail: handleSignUpWithEmail,
          handleSignUpWithGoogle: handleSignUpWithGoogle,
          handleSignUpWithFb: handleSignUpWithFb,
          handleSignOut: handleSignOut,
        }}
      >
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
            <PrivateRoute path="/booking/hotel-booking">
              <HotelBooking />
            </PrivateRoute>
            <Route path="*">
              <NoRoute />
            </Route>
          </Switch>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
};

export default App;
