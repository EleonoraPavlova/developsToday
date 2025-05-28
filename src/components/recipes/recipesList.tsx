import { ReactElement } from 'react'

import RecipeItem from '@/components/recipes/recipeItem'
import { Recipe, RecipesResponseResult } from '@/types/recipes.model'

type Props = {
  recipes: Recipe[] | RecipesResponseResult[]
}

const RecipesList = ({ recipes }: Props): ReactElement => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {recipes?.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)}
    </div>
  )
}

export default RecipesList
