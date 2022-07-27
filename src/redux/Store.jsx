import { createStore,combineReducers,applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import BudgetReducer from './BudgetReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers(
    {
        budget: BudgetReducer,
        user: UserReducer
    }
);

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))