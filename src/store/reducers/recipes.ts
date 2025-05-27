import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getRecipesFilter } from '@/store/actions/recipes.thunks'
import { recipesState } from '@/store/classes/recipesState.class'
import { mockRecipesModel } from '@/store/initialState'
import { RecipesModel } from '@/store/models/recipes.model'
import { RootState } from '@/store/store'

const initialState: recipesState = {
  recipes: mockRecipesModel,
  isFetching: false,
  error: null,
}

const recipesSlice = createSlice({
  name: 'filterRecipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipesFilter.pending, (state) => {
      state.isFetching = true
    })
    builder.addCase(getRecipesFilter.fulfilled, (state, action: PayloadAction<RecipesModel>) => {
      state.recipes = action.payload
      state.isFetching = false
    })
    builder.addCase(getRecipesFilter.rejected, (state) => {
      state.isFetching = false
      state.recipes = mockRecipesModel
    })
  },
  selectors: {
    filterRecipes: (state) => state.recipes.recipes,
  },
})

export const { filterRecipes } = recipesSlice.getSelectors((rootState: RootState) => rootState.recipes)

export default recipesSlice.reducer
