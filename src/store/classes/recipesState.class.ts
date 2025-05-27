import { RecipesModel } from '@/store/models/recipes.model'

export interface recipesState {
  recipes: RecipesModel
  isFetching: boolean
  error: Error | null
}
