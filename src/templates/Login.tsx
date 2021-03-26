import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  p: {
    // margin:'auto',
    // width:'50%',
    textAlign:'center',
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <p className={classes.p}>login page</p>
    </div>
  );
}