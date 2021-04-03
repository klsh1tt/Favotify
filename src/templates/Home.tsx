import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header, Carousel } from "../components";
import { useSelector } from "react-redux";
import { getUserId } from "../reducks/users/selectors";

const useStyles = makeStyles({
  h1: {
    // margin:'auto',
    // width:'50%',
    textAlign: "center",
  },
});

const Home = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);

  return (
    <div>
      <Header />
      <h1 className={classes.h1}>My Favorite Charts</h1>
      <p>{uid}</p>
      <Carousel />
    </div>
  );
};

export default Home;
