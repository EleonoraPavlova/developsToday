import { ReactElement } from 'react'

import { Button } from '@/components/ui/button'
import { Dropdown, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown'
import { Cuisine } from '@/types/common'

interface Props {
  data: Cuisine[]
  cuisines: Cuisine | ''
  onChange: (_cuisines: Cuisine) => void
}

const DropdownComponent = ({ data, onChange, cuisines }: Props): ReactElement => {
  return (
    <Dropdown>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='min-w-[300px]'>
          {cuisines || 'Select Cuisine'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-[300px]'>
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
