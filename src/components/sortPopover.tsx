import { ArrowUpDown } from 'lucide-react'
import { ReactElement, useState } from 'react'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/shared/button'
import { Typography } from '@/shared/typography'
import { SORT_OPTIONS, SortOption } from '@/types/recipes.model'

interface Props {
  sort: SortOption
  setSort: (_value: SortOption) => void
}

const SortPopover = ({ sort, setSort }: Props): ReactElement => {
  const [open, setOpen] = useState(false)

  const selectSortHandler = (item: SortOption) => {
    setSort(item)
    setOpen(!open)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className='flex items-center gap-2 cursor-pointer'>
        <ArrowUpDown width={16} height={16} />
        <Typography>Sort by:</Typography>
        <Typography className='text-primary'>{sort}</Typography>
      </PopoverTrigger>
      <PopoverContent className='flex flex-col gap-2 p-2 w-[180px]'>
        {SORT_OPTIONS.map(({ label, value }) => (
          <Button key={value} variant='ghost' onClick={() => selectSortHandler(value)}>
            {label}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  )
}
export default SortPopover
