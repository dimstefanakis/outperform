'use server'
import { HeroSection } from '@/types'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Suspense } from 'react'
import ImageBox from '@/components/shared/ImageBox'
import { Navbar } from '@/components/global/Navbar'
import Image from 'next/image'

export interface HeroProps {
  data: HeroSection | null
}

export async function Hero({ data }: HeroProps) {
  return (
    <div className="w-full flex justify-center align-center hero-section px-2 md:px-3 lg:px-3">
      <div className="w-full bg-black h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[100vh] rounded-[50px] mt-2">
        {/*<Navbar />*/}

        <div className="w-full h-full relative">
          <div className="text-white text-center flex items-center justify-evenly h-full">
            <div className="flex flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold max-w-[100px]">
                {data?.title}
              </h1>
              <CustomPortableText
                value={data?.overview}
                paragraphClasses="max-w-[300px] lg:ml-10 text-left mt-4 text-gray-400"
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
