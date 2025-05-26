import { ReactElement } from 'react'

import {
  Dropdown,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown'
import { TabOption } from '@/shared/categoriesTabs/categoriesTabs.const'

interface Props {
  data: TabOption[]
  onChange: (_tab: string) => void
}

const DropdownComponent = ({ data, onChange }: Props): ReactElement => {
  return (
    <Dropdown>
      <DropdownMenuTrigger asChild>
        <button className='px-4 py-2 border rounded-md'>Select Category</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {data.map((item) => (
          <DropdownMenuItem key={item.value} onClick={() => onChange(item.value)}>
            {item.value}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </Dropdown>
  )
}

export default DropdownComponent
