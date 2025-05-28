export const API_ROUTES = {
  recipesRandom: 'recipes/random',
  filter: 'recipes/complexSearch',
  recipeById: (id: number) => `/recipes/${id}/information`,
}
