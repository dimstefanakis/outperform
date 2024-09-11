'use client'
import { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'
import ImageBox from '@/components/shared/ImageBox'
import { OutroSection } from '@/types'

export function Outro({ data }: { data: OutroSection }) {
  console.log(data)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

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
    <div className="w-full flex flex-col items-center justify-center my-24">
      <h1 className="text-8xl md:text-9xl font-bold text-center w-full md:w-[70%]">
        {data.title}
      </h1>
      <div className="flex justify-center items-center cursor-pointer px-8 py-3 mt-4 rounded-full border-2 border-blue-500">
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
      </div>
      <div className="w-[300px]">
        <ImageBox
          image={data.partners_image}
          height={data.partners_image?.asset.metadata.dimensions.height}
          width={data.partners_image?.asset.metadata.dimensions.width}
          alt={'Outro Image'}
          classesWrapper="w-full mt-8"
          imageClasses="rounded-2xl"
        />
      </div>
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
                      classesWrapper="w-full object-contain border-[2px] border-white image-shadow"
                      imageClasses="rounded-2xl"
                    />
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
