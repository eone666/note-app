import React, { useState, FormEvent } from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

interface ISignUnFormProps {
  onSignUp: Function;
}

export default function SignUpForm(props: ISignUnFormProps) {
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const classes = useStyles();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(password === repeatedPassword){
      props.onSignUp(email, password);
    } else {
      alert('Passwords do not match')
    }
  };

  return (
    <form className={classes.root} onSubmit={submitHandler}>
      <div className={classes.inputGroup}>
        <TextField
          required
          label="E-mail"
          onChange={event => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <TextField
          required
          label="Password"
          type="password"
          onChange={event => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <TextField
          required
          label="Repeat password"
          type="password"
          onChange={event => {
            setRepeatedPassword(event.target.value);
          }}
          value={repeatedPassword}
        />
      </div>
      <Button type="submit" color="primary" variant="contained">
        Sign up
      </Button>
      <Link className={classes.centerLink} to="/sign-in">
        Allready have account? Sign in now.
      </Link>
    </form>
  );
}
