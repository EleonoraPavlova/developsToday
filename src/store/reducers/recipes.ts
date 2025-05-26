import { createSlice } from '@reduxjs/toolkit'

import { getRecipesRandom } from '@/store/actions/recipes'
import { recipesRandomState } from '@/store/classes/recipesState.class'
import { mockRecipesRandomModel } from '@/store/initialState'
import { RootState } from '@/store/store'

const initialState: recipesRandomState = {
  recipesRandom: mockRecipesRandomModel,
  isFetching: false,
  error: null,
}

const recipesSlice = createSlice({
  name: 'randomRecipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipesRandom.pending, (state) => {
      state.isFetching = true
    })
    builder.addCase(getRecipesRandom.fulfilled, (state, action: any) => {
      state.recipesRandom = action.payload
      state.isFetching = false
    })
    builder.addCase(getRecipesRandom.rejected, (state) => {
      state.isFetching = false
      state.recipesRandom = mockRecipesRandomModel
    })
  },
  selectors: {
    recipesRandom: (state) => state.recipesRandom,
  },
})

export const { recipesRandom } = recipesSlice.getSelectors((rootState: RootState) => rootState.recipes)

export default recipesSlice.reducer
