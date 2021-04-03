import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DefaultRootState } from 'react-redux'

// stateの型定義
export type UserState = {
  isSignedIn: boolean
  uid: string
  username: string
}

export interface UserRootState extends DefaultRootState {
  users: UserState
}

export const initialState: UserRootState = {
  users: {
    isSignedIn: false,
    uid: '',
    username: '',
  },
}

// createSliceでreducerとactionを同時に定義
const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInAction: (state: UserRootState, action: PayloadAction<UserState>) => ({
      ...state,
      ...{
        isSignedIn: action.payload.isSignedIn,
        uid: action.payload.uid,
        username: action.payload.username,
      },
    }),
    signOutAction: (state: UserRootState) => ({
      ...state,
      ...{
        isSignedIn: false,
        uid: '',
        username: '',
      },
    }),
  },
})

export default slice.reducer

// action creatorのエクスポート
export const { signInAction, signOutAction } = slice.actions

// // storeを作るヘルパー複数のreducerをまとめる機能もあり
// export const store = configureStore({
//   reducer: slice.reducer,
// })
