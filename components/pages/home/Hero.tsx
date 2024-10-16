'use server'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

import { Navbar } from '@/components/global/Navbar'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import { HeroSection, NavigationPayload } from '@/types'

export interface HeroProps {
  data: HeroSection | null
  navbarData: NavigationPayload | null
}

export async function Hero({ data, navbarData }: HeroProps) {
  return (
    <div className="w-full flex justify-center align-center hero-section px-2 md:px-3 lg:px-3">
      <div className="w-full relative bg-black h-[70vh] sm:h-[70vh] md:h-[70vh] lg:h-[70vh] 2xl:h-[70vh] rounded-lg lg:rounded-[25px] mt-2">
        {/*<Navbar />*/}
        <div className="block lg:hidden">
          <Link
            href={navbarData?.contactCTA.link || ''}
            className="absolute right-[-50px] z-10 bottom-[80px] -rotate-90"
          >
            <div className="flex justify-center items-center">
              <ImageBox
                image={navbarData?.contactCTA.icon}
                height={
                  navbarData?.contactCTA.icon?.asset?.metadata?.dimensions
                    ?.height
                }
                width={
                  navbarData?.contactCTA.icon?.asset?.metadata?.dimensions
                    ?.width
                }
                alt="Contact Icon"
                classesWrapper="w-[16px] mr-2 mb-1 object-contain rounded-none"
              />
              <span className="text-white">{navbarData?.contactCTA.text}</span>
            </div>
          </Link>
        </div>
        <div className="w-full h-full relative">
          <div className="text-white text-center flex items-center justify-evenly h-full">
            <div className="flex flex-col px-6 md:px-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl font-bold text-left max-w-[200px] md:max-w-[100px]">
                {data?.title}
              </h1>
              <CustomPortableText
                // @ts-ignore
                value={data?.overview}
                paragraphClasses="max-w-full md:max-w-[300px] lg:max-w-[500px] lg:ml-10 text-left mt-4 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl"
              />
            </div>
            <div className="hidden md:block">
              <ImageBox
                image={data?.background}
                height={data?.background?.asset?.metadata?.dimensions?.height}
                width={data?.background?.asset?.metadata?.dimensions?.width}
                alt="background image"
                classesWrapper="w-[400px] object-cover relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
