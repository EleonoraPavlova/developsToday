import { createAsyncThunk } from '@reduxjs/toolkit'

import { spoonacular } from '@/app/api/_utils/axios'
import { API_ROUTES } from '@/app/api/apiRoutes'
import { RecipesFilterRequest } from '@/store/models/recipes.model'

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
