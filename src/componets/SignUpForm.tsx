import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function SignUpForm(){
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

  return (
    
      <form className={classes.root}>
        <div className={classes.inputGroup}>
          <TextField
            required
            label="E-mail"
          />
          <TextField
            required
            label="Password"
            type="password"
          />
          <TextField
            required
            label="Repeat password"
            type="password"
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
