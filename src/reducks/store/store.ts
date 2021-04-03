import { createStore as reduxCreateStore,combineReducers, applyMiddleware} from 'redux';
import {connectRouter,routerMiddleware} from 'connected-react-router';
import { UsersReducer } from '../users/reducers';
import { History } from 'history';

export default function createStore(history: History<any>){
    return reduxCreateStore(
        combineReducers({
            router:connectRouter(history),
            users:UsersReducer
        }),
        applyMiddleware(
            routerMiddleware(history)
        )
    );
}