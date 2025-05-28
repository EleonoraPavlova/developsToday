import { ReactElement, Suspense } from 'react'

import { getRecipeById } from '@/app/api/recipesApi'
import RecipeItem from '@/components/recipes/recipeItem'
import { Progress } from '@/components/ui/progress'
import { Card } from '@/shared/card'
import { Typography } from '@/shared/typography'

const RecipeDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }): Promise<ReactElement> => {
  const { slug } = await params
  const recipe = await getRecipeById({ id: Number(slug) })

  return (
    <div className='py-0 px-[30px]'>
      <Card className='w-[400px]'>
        <div className='pb-4 text-center'>
          <Typography as='h6' variant='subtitle1'>
            Recipe Details
          </Typography>
        </div>
        <Suspense fallback={<Progress />}>
          <RecipeItem recipe={recipe} isFullVersion />
        </Suspense>
      </Card>
    </div>
  )
}
export default RecipeDetailsPage
