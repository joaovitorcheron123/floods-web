import React from "react";

import { LoginContainer, LoginInnerContainer } from "../styles/Login.style";

import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://i.imgur.com/L8cwSf6.jpg"
          alt=""
        />
        <h1>Conectar ao Floods</h1>
        {/* <p>slack.com</p> */}
        <Button onClick={signIn}>Entrar com o Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;