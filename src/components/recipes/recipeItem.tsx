import Image from 'next/image'
import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'

import { ROUTES } from '@/app/api/routes'
import IngredientsList from '@/components/ingredients'
import { Typography } from '@/shared/typography'
import { Recipe, RecipesResponseResult } from '@/types/recipes.model'

interface Props {
  recipe: Recipe | RecipesResponseResult
  isFullVersion?: boolean
}

const RecipeItem = ({ recipe, isFullVersion = false }: Props): ReactElement => {
  const Wrapper = ({ children }: { children: ReactNode }) =>
    isFullVersion ? <div>{children}</div> : <Link href={ROUTES.getRecipeDetails(recipe.id)}>{children}</Link>

  return (
    <div className='rounded-2xl border p-3 flex flex-col gap-2 shadow-sm'>
      <Wrapper>
        <div className='relative w-full h-[190px] rounded-xl overflow-hidden'>
          <Image
            src={recipe.image || 'images/mockImage.jpg'}
            alt={recipe.title}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 33vw'
          />
        </div>
      </Wrapper>
      <Typography as='h4' variant='h4' className='line-clamp-2'>
        {recipe.title}
      </Typography>
      <div className='flex gap-3 justify-between'>
        {'aggregateLikes' in recipe && <Typography>❤️ {recipe.aggregateLikes}</Typography>}

        {'cookingMinutes' in recipe && typeof recipe.cookingMinutes === 'number' && recipe.cookingMinutes > 0 && (
          <Typography>⏱️ Min: {recipe.cookingMinutes}</Typography>
        )}
      </div>
      {isFullVersion && 'extendedIngredients' in recipe && Array.isArray(recipe.extendedIngredients) && (
        <>
          <Typography>🧂Ingredients ( {recipe.extendedIngredients.length} )</Typography>
          <IngredientsList ingredients={recipe.extendedIngredients} />
          <Typography>🌾 Gluten Free: {recipe.glutenFree ? 'Yes' : 'No'}</Typography>
        </>
      )}
    </div>
  )
}

export default RecipeItem
