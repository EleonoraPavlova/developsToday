import { Beef, ChefHat, CookingPot, Hamburger } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { MouseEvent, ReactElement } from 'react'

import { Button } from '@/components/ui/button'
import { Typography } from '@/shared/typography'

interface Props {
  isClickable?: boolean
}

const Logo = ({ isClickable = true }: Props): ReactElement => {
  const logoName = 'Home page'
  const slogan = 'Taste perfected in every detail'

  const router = useRouter()

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isClickable) {
      e.preventDefault()
      router.push('/')
      console.log('click', e)
    }
  }

  return (
    <>
      <Button variant='link' size='icon' onClick={handleClick} type='button'>
        <div className='flex flex-col gap-1 items-center'>
          <CookingPot />
          <ChefHat />
          <Hamburger />
          <Beef />
        </div>
      </Button>
      <div className='gap-1 flex flex-col items-start'>
        <Typography as='h3' variant='h2'>
          {logoName}
        </Typography>
        <Typography variant='subtitle2' gray>
          {slogan}
        </Typography>
      </div>
    </>
  )
}

export default Logo
