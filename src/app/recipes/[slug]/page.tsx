import { ReactElement, Suspense } from 'react'

import { getRecipeById } from '@/app/api/recipesApi'
import ContentPanel from '@/components/contentPanel'
import RecipeItem from '@/components/recipes/recipeItem'
import { Progress } from '@/shared/progress'

const RecipeDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }): Promise<ReactElement> => {
  const { slug } = await params
  const recipe = await getRecipeById({ id: Number(slug) })

  return (
    <ContentPanel title='Recipe Details' className='w-full sm:w-[310px] md:w-[450px]'>
      <Suspense fallback={<Progress />}>
        <RecipeItem recipe={recipe} isFullVersion />
      </Suspense>
    </ContentPanel>
  )
}
export default RecipeDetailsPage
