import { Input } from '@/components/ui/input'
import DropdownComponent from '@/shared/dropdown-menu'
import SortPopover from '@/shared/sortPopover'
import { Cuisine } from '@/types/common'

interface Props {
  data: Cuisine[]
  cuisines: Cuisine | ''
  onChange: (_cuisines: Cuisine) => void
}

const TopBar = ({ data, onChange, cuisines }: Props) => {
  return (
    <div className='flex gap-10 w-full sticky top-0 bg-background z-10'>
      <DropdownComponent data={data} onChange={onChange} cuisines={cuisines} />
      <Input type='number' width='w-50' min={5} max={180} placeholder='Cooking time' className='pl-2' />
      <SortPopover />
    </div>
  )
}

export default TopBar
