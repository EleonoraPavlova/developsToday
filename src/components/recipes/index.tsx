'use client'

import { ReactElement, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import RecipeItem from '@/components/recipes/recipeItem'
import { CUISINES } from '@/const/cuisines.const'
import { Card } from '@/shared/card'
import TopBar from '@/shared/topBar'
import { Typography } from '@/shared/typography'
import { getRecipesRandom } from '@/store/actions/recipes'
import { useAppDispatch } from '@/store/hooks'
import { recipesRandom } from '@/store/reducers/recipes'
import { Cuisine } from '@/types/common'

const Recipes = (): ReactElement => {
  const dispatch = useAppDispatch()
  const recipes = useSelector(recipesRandom)
  const [cuisines, setCuisines] = useState<Cuisine | ''>('')

  useEffect(() => {
    dispatch(getRecipesRandom({ number: 5 }))
  }, [dispatch])

  const setCuisinesHandler = (value: Cuisine | '') => {
    setCuisines(value)
  }

  return (
    <Card className='gap-[20px] flex flex-col'>
      <Typography as='h1' variant='h1'>
        All Recipes
      </Typography>
      <TopBar data={[...CUISINES]} onChange={setCuisinesHandler} cuisines={cuisines} />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <RecipeItem recipes={recipes} />
      </div>
    </Card>
  )
}

export default Recipes
