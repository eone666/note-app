import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Typography, Container } from "@material-ui/core";
import SignUpForm from "../componets/SignUpForm";
import SignInForm from "../componets/SignInForm";
import fb from "../firebase";

interface IUserFormData {
  email: string;
  password: string;
}

interface IAuthResult {
  succes: boolean;
  message: string;
}


export default function AuthorizationPage() {
  const useStyles = makeStyles({
    root: {
      minHeight: `100vh`,
      display: `flex`,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  });

  const classes = useStyles();

  const signUpHandler = (email: string,password: string): IAuthResult => {

    fb.auth().createUserWithEmailAndPassword(email, password).then(()=>{
      alert('Confirm your e-mail address')
    }).catch(function(error) {
      // Handle Errors here.
      alert(error.message)
      // ...
    });

    return {
      succes: true,
      message: "succes"
    };
  };

  const signInHandler = (email:string,password:string): IAuthResult => {

    return {
      succes: true,
      message: "succes"
    };
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h2">Note App</Typography>
      <Switch>
        <Route path="/sign-in">
          <SignInForm onSignIn={signInHandler} />
        </Route>
        <Route path="/sign-up">
          <SignUpForm onSignUp={signUpHandler} />
        </Route>
        <Redirect from="/" to="sign-in" />
      </Switch>
    </Container>
  );
}
