import { ReactElement } from 'react'

import RecipeItem from '@/components/recipeItem'
import { Card } from '@/shared/card'
import { Typography } from '@/shared/typography'
import { getRecipeById } from '@/store/actions/recipesApi'

const RecipeDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }): Promise<ReactElement> => {
  const { slug } = await params
  const recipe = await getRecipeById({ id: Number(slug) })

  return (
    <Card className='w-[350px]'>
      <div className='pb-4 text-center'>
        <Typography as='h6' variant='subtitle1'>
          Recipe Details
        </Typography>
      </div>
      <RecipeItem recipe={recipe} />
    </Card>
  )
}
export default RecipeDetailsPage

//// change fullRecipeItem
