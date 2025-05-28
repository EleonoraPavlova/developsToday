import { ChangeEvent, ReactElement } from 'react'

import DropdownComponent from '@/components/dropdown-menu'
import SortPopover from '@/components/sortPopover'
import { Button } from '@/shared/button'
import { Input } from '@/shared/input'
import { Cuisine } from '@/types/common'
import { SortOption } from '@/types/recipes.model'

interface Props {
  data: Cuisine[]
  cuisines: Cuisine | ''
  search: string
  sort: SortOption
  setSort: (_sort: SortOption) => void
  disabled: boolean
  cookingTime: number | null
  setSearch: (_search: ChangeEvent<HTMLInputElement>) => void
  setCookingTime: (_time: ChangeEvent<HTMLInputElement>) => void
  onChange: (_cuisines: Cuisine) => void
  onNext: () => void
}

const TopBar = ({
  data,
  onChange,
  cuisines,
  disabled,
  setCookingTime,
  cookingTime,
  search,
  sort,
  setSort,
  setSearch,
  onNext,
}: Props): ReactElement => {
  return (
    <div className='flex flex-wrap gap-10 w-full sticky top-0 bg-background z-10 pb-3 sm:px-6'>
      <DropdownComponent data={data} onChange={onChange} cuisines={cuisines} />
      <Input
        placeholder='Searching of dishes'
        isSearch
        width='sm:w-[250px]'
        onChange={setSearch}
        value={search || ''}
      />
      <Input
        type='number'
        width='w-50'
        min={5}
        max={180}
        value={cookingTime || ''}
        onChange={setCookingTime}
        placeholder='Cooking time'
        className='pl-2'
      />
      <SortPopover sort={sort} setSort={setSort} />
      <Button disabled={disabled} onClick={onNext} className='ml-auto'>
        Next
      </Button>
    </div>
  )
}

export default TopBar
