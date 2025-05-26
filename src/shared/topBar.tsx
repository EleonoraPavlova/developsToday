import { Input } from '@/components/ui/input'
import { TabOption } from '@/shared/categoriesTabs/categoriesTabs.const'
import DropdownComponent from '@/shared/dropdown-menu'
import SortPopover from '@/shared/sortPopover'

interface Props {
  data: TabOption[]
  onChange: (_tab: string) => void
}

const TopBar = ({ data, onChange }: Props) => {
  return (
    <div className='flex gap-10 w-full sticky top-0 bg-background z-10'>
      <DropdownComponent data={data} onChange={onChange} />
      <Input type='number' width='w-50' min={5} max={180} placeholder='Cooking time' className='pl-2' />
      <SortPopover />
    </div>
  )
}

export default TopBar
