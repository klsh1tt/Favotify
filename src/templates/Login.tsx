import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { signInAction } from '../store/users'

const useStyles = makeStyles({
  p: {
    // margin:'auto',
    // width:'50%',
    textAlign: 'center',
  },
  h2: {
    // margin:'auto',
    // width:'50%',
    textAlign: 'center',
  },
})

const Login: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <div>
      <h2 className={classes.h2}>ログイン</h2>
      <button
        onClick={() => {
          dispatch(signInAction({ isSignedIn: true, uid: '00001', username: 'unknown' }))
          dispatch(push('/'))
        }}
      >
        ログインする
      </button>
    </div>
  )
}

export default Login
