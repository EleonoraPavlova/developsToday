import Image from 'next/image'

import { Typography } from '@/shared/typography'
import { Recipe } from '@/store/models/recipes.model'

type Props = {
  recipes: Recipe[]
}


const RecipeItem = ({recipes}:Props) => {
  return (
    <>
    {recipes?.map((recipe: Recipe) => (
      <div key={recipe.id} className='rounded-2xl border p-3 flex flex-col gap-2 shadow-sm'>
        <div className='relative w-full h-[180px] rounded-xl overflow-hidden'>
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 33vw'
          />
        </div>
        <Typography as='h4' variant='h4' className='line-clamp-2'>
          {recipe.title}
        </Typography>
        <Typography>❤️ {recipe.aggregateLikes}</Typography>
      </div>
    ))}
    </>
  )
}

export default RecipeItem