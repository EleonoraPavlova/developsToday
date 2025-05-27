import RecipesList from '@/components/recipesList'
import { getFirstString } from '@/lib/getFirstString'
import { Card } from '@/shared/card'
import { Typography } from '@/shared/typography'
import { getRecipesFilterApi } from '@/store/actions/recipesApi'
import { SORT_OPTIONS, SortOption } from '@/store/models/recipes.model'

const RecipesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}): Promise<JSX.Element> => {
  const params = await searchParams

  const query = getFirstString(params.query)
  const cuisine = getFirstString(params.cuisine)
  const maxReadyTimeStr = getFirstString(params.maxReadyTime)
  const sortRaw = getFirstString(params.sort)

  const validSorts = SORT_OPTIONS.map((option) => option.value)
  const sortValue = validSorts.includes(sortRaw as SortOption) ? (sortRaw as SortOption) : SORT_OPTIONS[0].value
  const maxReadyTime = maxReadyTimeStr ? Number(maxReadyTimeStr) : 45

  const data = await getRecipesFilterApi({
    query,
    cuisine,
    maxReadyTime,
    sort: sortValue,
  })

  return (
    <Card>
      <div className='pb-4 text-center'>
        <Typography as='h6' variant='subtitle1'>
          Recipes by filters
        </Typography>
      </div>
      {data.results.length ? (
        <RecipesList recipes={data.results} />
      ) : (
        <Typography as='h6' variant='subtitle1'>
          No results
        </Typography>
      )}
    </Card>
  )
}
export default RecipesPage
