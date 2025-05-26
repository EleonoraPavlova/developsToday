'use client'

import Image from 'next/image'
import { ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Card } from '@/shared/card'
import { Typography } from '@/shared/typography'
import { getRecipesRandom } from '@/store/actions/recipes'
import { useAppDispatch } from '@/store/hooks'
import { Recipe } from '@/store/models/recipes.model'
import { recipesRandom } from '@/store/reducers/recipes'

const HomeClient = (): ReactElement => {
  const dispatch = useAppDispatch()
  const recipes = useSelector(recipesRandom)

  useEffect(() => {
    dispatch(getRecipesRandom({ number: 5 }))
  }, [dispatch])

  console.log('recipes', recipes)

  return (
    <Card className='gap-[20px] flex flex-col'>
      <Typography as='h1' variant='h1'>
        All Recipes
      </Typography>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {recipes?.recipesRandom?.map((recipe: Recipe) => (
          <div key={recipe.id} className='rounded-2xl border p-3 flex flex-col gap-2 shadow-sm'>
            <div className='relative w-full h-[200px] rounded-xl overflow-hidden'>
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </div>
            <Typography as='h2' variant='h4' className='line-clamp-2'>
              {recipe.title}
            </Typography>
            <div className='text-sm text-muted-foreground'>❤️ {recipe.aggregateLikes} likes</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default HomeClient

//      {/*<TopBar data={CATEGORIES} onChange={setActiveCategoryId} />*/}
