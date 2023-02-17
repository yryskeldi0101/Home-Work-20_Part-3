import { fetchApi } from "../../lib/fetchApi";
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const mealsActionTypes = {
  GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
  GET_MEALS_STARTED: "GET_MEALS_STARTED",
  GET_MEALS_FAILED: " GET_MEALS_FAILED",
};

const initialState = {
  meals: [],
  isLoading: false,
  error: "",
};


export const getMeals = createAsyncThunk('meals/getMeals', async(payload, {dispatch,rejectWithValue}) =>{
  try {
    dispatch(mealsActions.getMealsStarted());
    const { data } = await fetchApi("foods");
    //   console.log(data);
    dispatch(mealsActions.getMealsSuccess(data));
    return data
  } catch (error) {
    // dispatch(mealsActions.getMealsFailed());
    return rejectWithValue('something went wrong')
  }
})


export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  // reducers: {
  //   getMealsStarted(state){
  //    state.isLoading = true
  //   },
  //   getMealsSuccess(state,action){
  //     console.log(action);
  //     state.meals= action.payload
  //     state.isLoading =false
  //     state.error = ''

  //   },
  //   getMealsFailed(state,action){
  //     state.isLoading = false
  //     state.error = action.payload
  //   }
  // },
  extraReducers: (builder) => {
    builder.addCase(getMeals.fulfilled, (state,action) =>{
      state.meals= action.payload
      state.isLoading =false
      state.error = ''
    })

    builder.addCase(getMeals.pending, (state) =>{
      state.isLoading = true
    })

    builder.addCase(getMeals.rejected, (state,action) =>{
      state.isLoading = false
      state.error = action.payload
    })


    // [getMeals.fulfilled]= (state,action) =>{
    //   state.meals= action.payload
    //   state.isLoading =false
    //   state.error = ''
    // },
    // [getMeals.pending] = (state,action) =>{
    //   state.isLoading = true
    // },
    // [getMeals.rejected] = (state,action) =>{
    //   state.isLoading = false
    //   state.error = action.payload
    // }
  }
  
})

export const mealsActions = mealsSlice.actions

// console.log('slice' ,mealsSlice);

// export const MealsReducer = (state = initialState, action) => {
//   // console.log(action);
//   switch (action.type) {
//     case mealsActionTypes.GET_MEALS_STARTED:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case mealsActionTypes.GET_MEALS_SUCCESS:
//       return {
//         ...state,
//         meals: action.payload,
//         isLoading: false,
//         error: "",
//       };

//     case mealsActionTypes.GET_MEALS_FAILED:
//       return {
//         ...state,
//         isLoading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };




// export const getMeals = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(mealsActions.getMealsStarted());

//       const { data } = await fetchApi("foods");
//       //   console.log(data);
//       dispatch(mealsActions.getMealsSuccess(data));
//     } catch (error) {
//       dispatch(mealsActions.getMealsFailed());
//     }
//   };
// };