'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, ReactElement, useState } from 'react'

import TopBar from '@/components/topBar'
import { CUISINES } from '@/const/cuisines.const'
import { Card } from '@/shared/card'
import { Typography } from '@/shared/typography'
import { Cuisine } from '@/types/common'
import { SORT_OPTIONS, SortOption } from '@/types/recipes.model'

const Search = (): ReactElement => {
  const router = useRouter()

  const [cuisines, setCuisines] = useState<Cuisine | ''>('')
  const [cookingTime, setCookingTime] = useState<number | null>(null)
  const [search, setSearch] = useState<string>('')
  const [sort, setSort] = useState<SortOption>(SORT_OPTIONS[0].value)

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
    if (cookingTime) params.set('maxReadyTime', cookingTime.toString())
    if (sort) params.set('sort', sort)

    router.push(`/recipes?${params.toString()}`)
  }

  const isDisabled = ![cuisines, cookingTime, search].some(Boolean)

  return (
    <Card className='gap-[20px] flex flex-col'>
      <Typography as='h1' variant='h1'>
        All Recipes
      </Typography>
      <TopBar
        data={[...CUISINES]}
        cookingTime={cookingTime}
        disabled={isDisabled}
        cuisines={cuisines}
        search={search}
        sort={sort}
        setSort={setSortHandler}
        onChange={setCuisinesHandler}
        setCookingTime={setCookingTimeHandler}
        setSearch={setSearchHandler}
        onNext={handleNext}
      />
    </Card>
  )
}

export default Search
