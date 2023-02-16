import {combineReducers,applyMiddleware, createStore} from 'redux'
import  {MealsReducer}  from '../store/meals/MealsReducer'
import thunk from 'redux-thunk'
import { BasketReducer } from './meals/BasketReducer'

const rootReducer = combineReducers({
    meals: MealsReducer,
    basket: BasketReducer

})

export const store = createStore(rootReducer,applyMiddleware(thunk))