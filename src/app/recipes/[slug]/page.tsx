import RecipeItem from '@/components/recipeItem'
import { Card } from '@/shared/card'
import { getRecipeById } from '@/store/actions/recipesApi'

interface Props {
  params: {
    slug: number
  }
}

const RecipeDetailsPage = async ({ params }: Props) => {
  const { slug } = await params
  const recipe = await getRecipeById({ id: Number(slug) })

  return (
    <Card className='w-[350px]'>
      <RecipeItem recipe={recipe} />
    </Card>
  )
}
export default RecipeDetailsPage

//// change fullRecipeItem
