import RecipesList from '@/components/recipesList'
import Search from '@/components/search'
import { getRecipesRandomApi } from '@/store/actions/recipesApi'

const Home = async (): Promise<JSX.Element> => {
  const data = await getRecipesRandomApi({ number: 35, sort: 'popularity' })

  return (
    <>
      <Search />
      <RecipesList recipes={data.recipes} />
    </>
  )
}

export default Home
