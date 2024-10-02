'use client'
import Link from 'next/link'
import Autoscroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'
import AuditForm from '@/components/AuditForm'

import ImageBox from '@/components/shared/ImageBox'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { type CarouselApi } from '@/components/ui/carousel'
import { OutroSection } from '@/types'

export function Outro({ data }: { data: OutroSection }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [isAuditFormOpen, setIsAuditFormOpen] = useState(false)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full flex flex-col items-center justify-center pt-14 pb-20 bg-[#F6F6F6]">
      <div className="w-full md:w-[70%]">
        <Carousel
          setApi={setApi}
          opts={{
            dragFree: true,
            loop: true,
          }}
          plugins={[Autoscroll({ playOnInit: true, speed: 1 })]}
          className="w-full md:max-w-full"
        >
          <CarouselContent className="items-start ml-0">
            {data.brand_images?.map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="flex flex-col lg:flex-row items-center justify-center w-[250px] mt-6 px-4"
                >
                  <div className="h-[100%] flex flex-col">
                    <ImageBox
                      image={item}
                      height={item?.asset.metadata.dimensions.height}
                      width={item?.asset.metadata.dimensions.width}
                      alt={'Brand Logo'}
                      classesWrapper="w-full object-contain bg-transparent rounded-none border-0"
                    />
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <h1 className="mt-[160px] text-7xl md:text-9xl font-bold text-center w-full md:w-[70%]">
        {data.title}
      </h1>
      <button
        onClick={() => setIsAuditFormOpen(true)}
        className="group flex justify-center items-center cursor-pointer px-8 py-3 mt-4 rounded-full border-2 border-blue-500 hover:bg-blue-500 hover:text-white [&_img]:hover:brightness-0 [&_img]:hover:invert"
      >
        {data.cta_icon && (
          <ImageBox
            image={data.cta_icon}
            height={data.cta_icon?.asset.metadata.dimensions.height}
            width={data.cta_icon?.asset.metadata.dimensions.width}
            alt={'CTA Icon'}
            classesWrapper="w-3 h-3 mr-2 mb-1 rounded-none"
            imageClasses="w-full h-full"
          />
        )}
        <span>{data.cta_text}</span>
      </button>
      {data.outro_description && (
        <div className='w-full flex flex-col items-center justify-center'>
          <div className="w-full mt-6 text-[#686868] max-w-[500px] flex justify-end px-4 lg:px-10">
            <div className="text-md md:text-xs text-center">
              <CustomPortableText value={data.outro_description}
                paragraphStyles={{
                  margin: '0px',
                }}
              />
            </div>
          </div>
        </div>
      )}
      <div className="w-[300px]">
        <ImageBox
          image={data.partners_image}
          height={data.partners_image?.asset.metadata.dimensions.height}
          width={data.partners_image?.asset.metadata.dimensions.width}
          alt={'Outro Image'}
          classesWrapper="w-full mt-24"
          imageClasses="rounded-2xl"
        />
      </div>
      <AuditForm
        isOpen={isAuditFormOpen}
        onClose={() => setIsAuditFormOpen(false)}
        logo={data.cta_icon}
      />
    </div>
  )
}
