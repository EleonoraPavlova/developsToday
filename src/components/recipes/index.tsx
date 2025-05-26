'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, ReactElement, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import RecipeItem from '@/components/recipes/recipeItem'
import { CUISINES } from '@/const/cuisines.const'
import { Card } from '@/shared/card'
import TopBar from '@/shared/topBar'
import { Typography } from '@/shared/typography'
import { getRecipesRandom } from '@/store/actions/recipes'
import { useAppDispatch } from '@/store/hooks'
import { SORT_OPTIONS, SortOption } from '@/store/models/recipes.model'
import { recipesRandom } from '@/store/reducers/recipes'
import { Cuisine } from '@/types/common'

const Recipes = (): ReactElement => {
  const dispatch = useAppDispatch()
  const recipes = useSelector(recipesRandom)
  const router = useRouter()

  const [cuisines, setCuisines] = useState<Cuisine | ''>('')
  const [cookingTime, setCookingTime] = useState<number | null>(null)
  const [search, setSearch] = useState<string>('')
  const [sort, setSort] = useState<SortOption>(SORT_OPTIONS[0].value)

  useEffect(() => {
    dispatch(getRecipesRandom({ number: 35 }))
  }, [dispatch])

  const setCuisinesHandler = (value: Cuisine | '') => {
    setCuisines(value)
  }

  const setCookingTimeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCookingTime(Number(e.target.value))
  }

  const setSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const setSortHandler = (value: SortOption) => {
    setSort(value)
  }

  const handleNext = () => {
    const params = new URLSearchParams()
    if (search) params.set('query', search)
    if (cuisines) params.set('cuisine', cuisines)
    if (cookingTime) params.set('time', cookingTime.toString())
    if (sort) params.set('sort', sort)

    router.push(`/recipes?${params.toString()}`)
  }

  return (
    <Card className='gap-[20px] flex flex-col'>
      <Typography as='h1' variant='h1'>
        All Recipes
      </Typography>
      <TopBar
        data={[...CUISINES]}
        cookingTime={cookingTime}
        disabled={!cuisines && !cookingTime && !search}
        cuisines={cuisines}
        search={search}
        sort={sort}
        setSort={setSortHandler}
        onChange={setCuisinesHandler}
        setCookingTime={setCookingTimeHandler}
        setSearch={setSearchHandler}
        onNext={handleNext}
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <RecipeItem recipes={recipes} />
      </div>
    </Card>
  )
}

export default Recipes
