import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

import { ROUTES } from '@/app/api/routes'
import { Typography } from '@/shared/typography'
import { Recipe, RecipesResponseResult } from '@/store/models/recipes.model'

interface Props {
  recipe: Recipe | RecipesResponseResult
}

const RecipeItem = ({ recipe }: Props): ReactElement => {
  return (
    <div className='rounded-2xl border p-3 flex flex-col gap-2 shadow-sm'>
      <Link href={ROUTES.getRecipeDetails(recipe.id)}>
        <div className='relative w-full h-[180px] rounded-xl overflow-hidden cursor-pointer'>
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 33vw'
          />
        </div>
      </Link>
      <Typography as='h4' variant='h4' className='line-clamp-2'>
        {recipe.title}
      </Typography>
      {'aggregateLikes' in recipe && <Typography>❤️ {recipe.aggregateLikes}</Typography>}
      {'cookingMinutes' in recipe && <Typography>{recipe.cookingMinutes}</Typography>}
    </div>
  )
}

export default RecipeItem
