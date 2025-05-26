import { RecipesRandomModel } from '@/store/models/recipes.model'

export interface recipesRandomState {
  recipes: RecipesRandomModel
  isFetching: boolean
  error: Error | null
}
