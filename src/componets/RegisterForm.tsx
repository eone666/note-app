import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Button, Snackbar, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { Link } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBq6bc5iGRCXdIDUfGACoA6kkxgEW05jdQ",
  authDomain: "note-app-6dcad.firebaseapp.com",
  databaseURL: "https://note-app-6dcad.firebaseio.com",
  projectId: "note-app-6dcad",
  storageBucket: "note-app-6dcad.appspot.com",
  messagingSenderId: "735394357604",
  appId: "1:735394357604:web:b1b79629c52dcddb6eda71"
};

firebase.initializeApp(firebaseConfig);

export default function RegisterForm() {
  const useStyles = makeStyles({
    root: {
      display: "grid",
      gridGap: "20px",
      width: "100%",
      padding: "20px",
      boxSizing: "border-box"
    },
    centerLink: {
      textAlign: "center"
    },
    inputGroup: {
      display: "grid",
      gridGap: "10px"
    }
  });

  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [errorOpened, setErrorOpened] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const showError = (message: string): void => {
    setErrorMessage(message);
    setErrorOpened(true);
  };

  const handleClose = () => {
    setErrorOpened(false);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === repeatedPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
          if (error.message) {
            showError(error.message);
          }
        });
    } else {
      showError("Passwords do not match.");
      return;
    }
    setEmail("");
    setPassword("");
    setRepeatedPassword("");
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={formSubmitHandler} className={classes.root}>
        <div className={classes.inputGroup}>
          <TextField
            required
            label="E-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            required
            label="Password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <TextField
            required
            label="Repeat password"
            type="password"
            value={repeatedPassword}
            onChange={event => setRepeatedPassword(event.target.value)}
          />
        </div>
        <Button type="submit" color="primary" variant="contained">
          Sign up
        </Button>
        <Link className={classes.centerLink} to="/sign-in">
          Allready have account? Sign in now.
        </Link>
        <Snackbar
          open={errorOpened}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            {errorMessage}
          </Alert>
        </Snackbar>
      </form>
    </Container>
  );
}
