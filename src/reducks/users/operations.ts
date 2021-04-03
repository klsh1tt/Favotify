import { push } from 'connected-react-router'
import { signInAction } from './actions'
export const signIn = () => {
  return async (dispatch: any, getState: any) => {
    const state = getState()
    const isSignedIn = state.users.isSignedIn

    if (!isSignedIn) {
      const url = 'https://api.github.com/users/deatiger'

      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null)

      const username = response.login

      dispatch(
        signInAction({
          uid: '0001',
          username: username,
        })
      )
      dispatch(push('/'))
    }
  }
}
