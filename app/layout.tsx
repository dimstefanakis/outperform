import './globals.css'

import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'
import localFont from '@next/font/local'

const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})

const cfdromon = localFont({
  src: [
    {
      path: '../public/fonts/CFDromon_Md.otf',
      weight: '400',
    },
    {
      path: '../public/fonts/CFDromon_Md.otf',
      weight: '500',
    },
    {
      path: '../public/fonts/CFDromon_Md.otf',
      weight: '600',
    },
    {
      path: '../public/fonts/CFDromon_Md.otf',
      weight: '700',
    },
  ],
  variable: '--font-cfdromon',
})

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  // @todo: understand why extrabold (800) isn't being respected when explicitly specified in this weight array
  // weight: ['500', '700', '800'],
})
const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cfdromon.variable} ${mono.variable} ${sans.variable} ${serif.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
