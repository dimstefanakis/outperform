import './globals.css'

import localFont from '@next/font/local'
import { Analytics } from '@vercel/analytics/react'
import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'

// import { Toaster } from "@/components/ui/toaster"
import { Toaster } from "@/components/ui/sonner"

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
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1569097794014662');
            fbq('track', 'PageView');
            `,
          }}
        />
        <Script
          id="reddit-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(w,d){
              if(!w.rdt){
                var p=w.rdt=function(){
                  p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)
                };
                p.callQueue=[];
                var t=d.createElement("script");
                t.src="https://www.redditstatic.com/ads/pixel.js";
                t.async=!0;
                var s=d.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(t,s)
              }
            }(window,document);
            rdt('init', 'a2_f5c1knlyv1bx');
            rdt('track', 'PageVisit');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}
