import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Header,Carousel} from '../components'

const useStyles = makeStyles({
  h1: {
    // margin:'auto',
    // width:'50%',
    textAlign:'center',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header/>    
      <h1 className={classes.h1}>My Favorite Charts</h1>
      <Carousel/>
    </div>
  );
}

export default Home;
