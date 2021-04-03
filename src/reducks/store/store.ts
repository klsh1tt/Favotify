import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { UsersReducer } from '../users/reducers'

export const history = createBrowserHistory()

export const store = reduxCreateStore(
  combineReducers({
    router: connectRouter(history),
    users: UsersReducer,
  }),
  applyMiddleware(routerMiddleware(history), thunk)
)
