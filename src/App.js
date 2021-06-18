import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppLoading, AppLoadingContents, AppBody } from "./styles/App.style";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";

import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "react-spinkit";
import { auth } from "./firebase";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://i.imgur.com/L8cwSf6.jpg"
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="red" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;