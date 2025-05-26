import { RecipesRandomModel } from '@/store/models/recipes.model'

export interface recipesRandomState {
  recipesRandom: RecipesRandomModel
  isFetching: boolean
  error: Error | null
}
