import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Header, Carousel } from '../components'
import { useSelector } from 'react-redux'
import { UserState } from '../store/users'

const useStyles = makeStyles({
  h1: {
    // margin:'auto',
    // width:'50%',
    textAlign: 'center',
  },
})

const Home: React.FC = () => {
  const classes = useStyles()
  const userState = useSelector((state: UserState) => state)
  const uid = userState.uid

  return (
    <div>
      <Header />
      <h1 className={classes.h1}>My Favorite Charts</h1>
      <p>{uid}</p>
      <Carousel />
    </div>
  )
}

export default Home
