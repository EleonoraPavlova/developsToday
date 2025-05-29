import { ReactElement } from 'react'

import { Dropdown, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown'
import { Button } from '@/shared/button'
import { Cuisine } from '@/types/common'

interface Props {
  data: Cuisine[]
  cuisines: Cuisine | ''
  onChange: (_cuisine: Cuisine) => void
}

const DropdownComponent = ({ data, onChange, cuisines }: Props): ReactElement => {
  return (
    <Dropdown>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='w-full sm:w-[220px]'>
          {cuisines || 'Select Cuisine'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-full sm:w-[220px]'>
        {data?.map((item) => (
          <DropdownMenuItem key={item} onClick={() => onChange(item)}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </Dropdown>
  )
}

export default DropdownComponent
