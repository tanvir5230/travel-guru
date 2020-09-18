import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

firebase.initializeApp(firebaseConfig);
export const Store = createContext();

const handleSignUpWithEmal = (email, password) => {
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
      console.log(res);
    })
    .catch((err) => {
      console.log(err.meassage);
    });
};
const handleLogin = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err.meassage);
    });
};
const handleSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then((res) => {
      alert("sign out successfull");
      console.log(res);
    })
    .catch((err) => {
      alert("could not sign out.");
      console.log(err.message);
    });
};
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedInUser(user);
      } else {
        setLoggedInUser(user);
      }
    });
  }, [loggedInUser]);

  return (
    <>
      <Store.Provider
        value={{
          loggedInUser: loggedInUser,
          handleLogin: handleLogin,
          handleSignUpWithEmal: handleSignUpWithEmal,
          handleSignUpWithGoogle: handleSignUpWithGoogle,
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
