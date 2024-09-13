'use client'
import { useEffect, useState } from 'react'

import { Circle } from '@/components/shared/Circle'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import useMediaQuery from '@/hooks/useMediaQuery'
import { WhoSection } from '@/types'

export function WhoCarousel({ data }: { data: WhoSection }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const isLaptop = useMediaQuery('(min-width: 1024px)')

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

  return isLaptop ? (
    <div className="flex w-full my-12">
      {data.circles.map((circle, index) => {
        return (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start justify-center md:basis-1/2 lg:basis-1/3 mt-6 mx-4 lg:mx-10"
          >
            <div className="w-[250px] lg:w-[250px]">
              <Circle data={circle} />
            </div>
          </div>
        )
      })}
    </div>
  ) : (
    data.circles && (
      <Carousel setApi={setApi} className="w-full md:max-w-full my-12">
        <CarouselContent className="items-start">
          {data.circles.map((circle, index) => {
            return (
              <CarouselItem
                key={index}
                className="flex flex-col lg:flex-row items-center justify-center md:basis-1/2 lg:basis-1/3 mt-6 mx-4 lg:mx-10"
              >
                <div className="w-[250px] lg:w-[250px]">
                  <Circle data={circle} />
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <div className="w-full flex items-center justify-center my-20">
          <div className="w-full max-w-[200px] bg-gray-50 block md:hidden h-1 relative">
            <Separator
              className={`w-full h-1 bg-blue-500 transition-all duration-300 ease-in-out`}
              style={{
                width: `${(current / count) * 100}%`,
              }}
            />
          </div>
        </div>
      </Carousel>
    )
  )
}
