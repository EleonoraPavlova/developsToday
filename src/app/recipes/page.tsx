import { ReactElement, Suspense } from 'react'

import { getRecipesFilterApi } from '@/app/api/recipesApi'
import ContentPanel from '@/components/contentPanel'
import RecipesList from '@/components/recipes/recipesList'
import { getFirstString } from '@/lib/getFirstString'
import { removeDuplicatesByKey } from '@/lib/removeDuplicatesByKey'
import { Progress } from '@/shared/progress'
import { Typography } from '@/shared/typography'
import { SORT_OPTIONS, SortOption } from '@/types/recipes.model'

const RecipesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}): Promise<ReactElement> => {
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

  const uniqueRecipes = removeDuplicatesByKey(data.results)

  return (
    <ContentPanel title='Recipes by filters'>
      {data.results.length ? (
        <Suspense fallback={<Progress />}>
          <RecipesList recipes={uniqueRecipes} />
        </Suspense>
      ) : (
        <Typography as='h6' variant='subtitle1'>
          No results
        </Typography>
      )}
    </ContentPanel>
  )
}
export default RecipesPage
