import { API_ROUTES } from '@/app/api/apiRoutes'
import {
  Recipe,
  RecipesFilterRequest,
  RecipesModel,
  RecipesRandomRequest,
  RecipesResponse,
} from '@/types/recipes.model'

import { fetchWithCache } from '../_utils/fetch'
import { buildUrl } from '../_utils/url'

export const getRecipesRandomApi = async (params: RecipesRandomRequest): Promise<RecipesModel> => {
  try {
    const url = buildUrl(API_ROUTES.recipesRandom, params)
    return await fetchWithCache<RecipesModel>(url)
  } catch (e: any) {
    throw new Error(e ?? 'Something went wrong while fetching random recipes')
  }
}

export const getRecipesFilterApi = async (params: RecipesFilterRequest): Promise<RecipesResponse> => {
  try {
    const url = buildUrl(API_ROUTES.filter, params)
    return await fetchWithCache<RecipesResponse>(url)
  } catch (e: any) {
    throw new Error(e ?? 'Error while fetching recipes with filters')
  }
}

export const getRecipeById = async (params: { id: number }): Promise<Recipe> => {
  try {
    const url = buildUrl(API_ROUTES.recipeById(params.id), {})
    return await fetchWithCache<Recipe>(url)
  } catch (e: any) {
    throw new Error(e ?? 'Error while fetching the recipe by id')
  }
}
