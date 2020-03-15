import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

interface ISignInFormProps{
  onSignIn: Function
}

export default function SignIpForm(props: ISignInFormProps) {
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

  props.onSignIn(email,password);

  return (
    <form className={classes.root}>
      <div className={classes.inputGroup}>
        <TextField required label="E-mail" value={email} onChange={event=>{setEmail(event.target.value)}} />
        <TextField required label="Password" type="password"  value={password} onChange={event=>{setPassword(event.target.value)}}/>
      </div>
      <Button type="submit" color="primary" variant="contained">
        Sign in
      </Button>
      <Link className={classes.centerLink} to="/sign-up">
        Don't have an accout yet? Create it now.
      </Link>
    </form>
  );
}
