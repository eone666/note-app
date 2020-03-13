import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core'
import RegisterForm from '../componets/RegisterForm'

export default function SignUp(){

    const useStyles = makeStyles({
        root:{
            minHeight:`100vh`,
            display:`flex`,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
        }
    })

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Typography variant="h2">Note App</Typography>
            <RegisterForm/>
        </div>
    )
}