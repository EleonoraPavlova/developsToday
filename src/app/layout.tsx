import './globals.css'

import { Atma } from 'next/font/google'
import { ReactNode } from 'react'

import { Providers } from '@/providers/provider'
import { Header } from '@/shared/header'

const atma = Atma({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang='en' className={atma.className}>
      <body>
        <Providers>
          <Header />
          <main className='min-h-screen'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
