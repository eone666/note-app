import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Typography, Container } from "@material-ui/core";
import SignUpForm from "../componets/SignUpForm";
import SignInForm from "../componets/SignInForm";

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

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h2">Note App</Typography>
      <Switch>
        <Route path="/sign-in">
          <SignInForm />
        </Route>
        <Route path="/sign-up">
          <SignUpForm />
        </Route>
        <Redirect from="/" to="sign-in" />
      </Switch>
    </Container>
  );
}
