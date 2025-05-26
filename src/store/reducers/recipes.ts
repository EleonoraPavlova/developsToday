import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getRecipesRandom } from '@/store/actions/recipes'
import { recipesRandomState } from '@/store/classes/recipesState.class'
import { mockRecipesRandomModel } from '@/store/initialState'
import { RecipesRandomModel } from '@/store/models/recipes.model'
import { RootState } from '@/store/store'

const initialState: recipesRandomState = {
  recipes: mockRecipesRandomModel,
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
    builder.addCase(getRecipesRandom.fulfilled, (state, action: PayloadAction<RecipesRandomModel>) => {
      state.recipes = action.payload
      state.isFetching = false
    })
    builder.addCase(getRecipesRandom.rejected, (state) => {
      state.isFetching = false
      state.recipes = mockRecipesRandomModel
    })
  },
  selectors: {
    recipesRandom: (state) => state.recipes.recipes,
  },
})

export const { recipesRandom } = recipesSlice.getSelectors((rootState: RootState) => rootState.recipes)

export default recipesSlice.reducer
