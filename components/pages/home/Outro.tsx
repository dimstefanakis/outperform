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
import Autoplay from 'embla-carousel-autoplay'
import ImageBox from '@/components/shared/ImageBox'
import { OutroSection } from '@/types'

export function Outro({ data }: { data: OutroSection }) {
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
    <Carousel
      setApi={setApi}
      plugins={[Autoplay({ playOnInit: true, delay: 3000 })]}
      className="w-full md:max-w-full"
    >
      <CarouselContent className="items-start ml-0">
        {data.brand_images?.map((item, index) => {
          return (
            <CarouselItem
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center basis-full md:basis-1/2 mt-6 px-4"
            >
              <div className="w-[100%] flex flex-col">
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
  )
}
