import { ReactElement } from 'react'

import { getRecipesRandomApi } from '@/app/api/recipesApi'
import RecipesList from '@/components/recipes/recipesList'
import Search from '@/components/search'

const Home = async (): Promise<ReactElement> => {
  const data = await getRecipesRandomApi({ number: 35, sort: 'popularity' })

  return (
    <div className='py-0 px-[30px]'>
      <Search />
      <RecipesList recipes={data.recipes} />
    </div>
  )
}

export default Home
