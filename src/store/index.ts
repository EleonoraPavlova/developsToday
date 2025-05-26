import { configureStore } from '@reduxjs/toolkit'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import recipesReducer from './reducers/recipes'

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, Action>
