import { ReactElement } from 'react'

import RecipesList from '@/components/recipes/recipesList'
import Search from '@/components/search'
import { getRecipesRandomApi } from '@/store/actions/recipesApi'

const Home = async (): Promise<ReactElement> => {
  const data = await getRecipesRandomApi({ number: 35, sort: 'popularity' })

  return (
    <>
      <Search />
      <RecipesList recipes={data.recipes} />
    </>
  )
}

export default Home
