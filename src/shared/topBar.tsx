import { ChangeEvent, ReactElement } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import DropdownComponent from '@/shared/dropdown-menu'
import SortPopover from '@/shared/sortPopover'
import { SortOption } from '@/store/models/recipes.model'
import { Cuisine } from '@/types/common'

interface Props {
  data: Cuisine[]
  cuisines: Cuisine | ''
  search: string
  sort: SortOption
  setSort: (sort: SortOption) => void
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
    <div className='flex gap-10 w-full sticky top-0 bg-background z-10'>
      <DropdownComponent data={data} onChange={onChange} cuisines={cuisines} />
      <Input placeholder='Searching of dishes' isSearch width='w-[250]' onChange={setSearch} value={search || ''} />
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
