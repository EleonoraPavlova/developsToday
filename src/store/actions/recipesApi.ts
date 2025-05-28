import { spoonacular } from '@/app/api/_utils/axios'
import { API_ROUTES } from '@/app/api/apiRoutes'
import {
  Recipe,
  RecipesFilterRequest,
  RecipesModel,
  RecipesRandomRequest,
  RecipesResponse,
} from '@/store/models/recipes.model'

export const getRecipesRandomApi = async (params: RecipesRandomRequest): Promise<RecipesModel> => {
  'use cache'
  try {
    const res = await spoonacular.get(API_ROUTES.recipesRandom, { params })
    return res.data
  } catch (e: any) {
    throw new Error(e ?? 'Something went wrong while fetching random recipes')
  }
}

export const getRecipesFilterApi = async (params: RecipesFilterRequest): Promise<RecipesResponse> => {
  'use cache'
  try {
    const res = await spoonacular.get(API_ROUTES.filter, { params })
    return res.data
  } catch (e: any) {
    throw new Error(e ?? 'Error while fetching recipes with filters')
  }
}

export const getRecipeById = async (params: { id: number }): Promise<Recipe> => {
  'use cache'
  try {
    const url = API_ROUTES.recipeById(params.id)
    const res = await spoonacular.get(url)
    return res.data
  } catch (e: any) {
    throw new Error(e ?? 'Error while fetching the recipe by id')
  }
}
