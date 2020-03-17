import React ,{ useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Typography, Container } from "@material-ui/core";
import SignUpForm from "../componets/SignUpForm";
import SignInForm from "../componets/SignInForm";
import fb from "../firebase";

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

  const [isLoading,setLoadingStatus] = useState(false)

  const signUpHandler = (email: string,password: string): void => {

    setLoadingStatus(true);

    fb.auth().createUserWithEmailAndPassword(email, password).then(()=>{
      alert('Registration success')
    }).catch(function(error) {
      // Handle Errors here.
      alert(error.message)
      // ...
    }).finally(()=>{
      setLoadingStatus(false)
    });
  };

  const signInHandler = (email:string,password:string): void => {

  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h2">Note App</Typography>
      <Switch>
        <Route path="/sign-in">
          <SignInForm onSignIn={signInHandler} isLoading={isLoading}/>
        </Route>
        <Route path="/sign-up">
          <SignUpForm onSignUp={signUpHandler} isLoading={isLoading}/>
        </Route>
        <Redirect from="/" to="sign-in" />
      </Switch>
    </Container>
  );
}
