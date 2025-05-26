import { ReactElement, useCallback } from 'react'

import { Button } from '@/components/ui/button'

interface Props {
  tabs: any
  onChange: (_tab: string) => void
}

const CategoriesTabs = ({ tabs, onChange }: Props): ReactElement => {
  const handleTabChange = useCallback(
    (value: string) => {
      onChange(value)
    },
    [onChange]
  )

  return (
    <div className='inline-flex gap-4 bg-muted rounded-2xl p-1.5'>
      {tabs.map((t: any) => (
        <Button
          variant='ghost'
          key={t.value}
          className={`px-4 py-2 rounded-md transition-colors ${
            t.value === tabs[0] ? 'text-primary bg-white hover:bg-white/80' : 'hover:text-primary'
          }`}
          onClick={() => handleTabChange(t.value)}
        >
          {t.label}
        </Button>
      ))}
    </div>
  )
}

export default CategoriesTabs
