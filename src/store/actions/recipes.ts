import { createAsyncThunk } from '@reduxjs/toolkit'

import { spoonacular } from '@/app/api/_utils/axios'
import { API_ROUTES } from '@/app/api/apiRoutes'
import { RecipesFilterRequest, RecipesRandomRequest } from '@/store/models/recipes.model'

export const getRecipesRandom = createAsyncThunk(
  'recipes/getRecipesRandom',
  async (params: RecipesRandomRequest, thunkAPI) => {
    try {
      const response = await spoonacular.get(API_ROUTES.recipesRandom, {
        params,
      })
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Unknown error')
    }
  }
)

export const getRecipesFilter = createAsyncThunk(
  'recipes/getRecipesFilter',
  async (params: RecipesFilterRequest, thunkAPI) => {
    try {
      const response = await spoonacular.get(API_ROUTES.filter, {
        params,
      })
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Unknown error')
    }
  }
)
