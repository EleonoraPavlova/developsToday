import './globals.css'

import type { Metadata } from 'next'
import { Atma } from 'next/font/google'
import { ReactNode } from 'react'

import { Header } from '@/shared/header'

const atma = Atma({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dishes',
  description: 'Enjoy the best recipes',
  icons: {
    icon: '/favicon.ico',
  },
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang='en' className={atma.className}>
      <body>
        <Header />
        <main className='min-h-screen mb-3.5'>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
