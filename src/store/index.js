import { combineReducers, applyMiddleware, createStore } from "redux";
import { mealsSlice } from "./meals/MealsSlice";
import thunk from "redux-thunk";
import { basketSlice } from "./meals/BasketSlice";

const rootReducer = combineReducers({
  [mealsSlice.name]: mealsSlice.reducer,
  [basketSlice.name]: basketSlice.reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
