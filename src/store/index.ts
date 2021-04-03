import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import user from './users'

export const history = createBrowserHistory()

const reducer = combineReducers({
  router: connectRouter(history),
  user: user,
})

export type RootState = ReturnType<typeof reducer>

export const store = configureStore({
  reducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(routerMiddleware(history))
  },
})
