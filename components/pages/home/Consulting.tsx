'use client'
import { useState, useEffect } from 'react'
import { ConsultingSection } from '@/types'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { type CarouselApi } from '@/components/ui/carousel'
import ImageBox from '@/components/shared/ImageBox'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function Consulting({ data }: { data: ConsultingSection }) {
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

  return (
    <div className="flex flex-col w-full mt-12">
      <div className="flex w-full flex-col">
        {data.title && (
          <div className="text-black text-4xl md:text-5xl font-bold mt-6 flex">
            <ImageBox
              image={data.icon}
              height={data.icon?.asset.metadata.dimensions.height}
              width={data.icon?.asset.metadata.dimensions.width}
              alt={data.title}
              classesWrapper="w-[30px] min-w-[30px] md:w-[40px] md:min-w-[40px] mr-2 object-contain rounded-none"
            />
            <span>{data.title}</span>
          </div>
        )}
      </div>
      {isLaptop ? (
        <div className="flex w-full">
          {data?.consulting_items?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-start justify-center basis-full mt-6 mx-4 lg:mx-10"
              >
                <div className="w-full flex flex-col">
                  <ImageBox
                    image={item.image}
                    height={item.image?.asset.metadata.dimensions.height}
                    width={item.image?.asset.metadata.dimensions.width}
                    alt={item.title}
                    classesWrapper="w-full object-contain border-[2px] border-white image-shadow "
                    imageClasses="rounded-2xl"
                  />
                  <div className="flex flex-col mt-6">
                    <h3 className="text-black text-2xl font-bold my-0">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-base mt-2 max-w-[75%] lg:max-w-[270px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        data.consulting_items && (
          <Carousel setApi={setApi} className="w-full md:max-w-full">
            <CarouselContent className="items-start ml-0">
              {data.consulting_items.map((item, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="flex flex-col lg:flex-row items-center justify-center basis-full md:basis-1/2 mt-6 pl-0 pr-2"
                  >
                    <div className="w-[100%] flex flex-col">
                      <ImageBox
                        image={item.image}
                        height={item.image?.asset.metadata.dimensions.height}
                        width={item.image?.asset.metadata.dimensions.width}
                        alt={item.title}
                        classesWrapper="w-full object-contain border-[2px] border-white image-shadow"
                        imageClasses="rounded-2xl"
                      />
                      <p className="text-black text-2xl font-bold mt-6">
                        {item.title}
                      </p>
                      <p className="text-gray-500 text-base mt-2 max-w-[75%] lg:max-w-[270px]">
                        {item.description}
                      </p>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <div className="w-full flex items-center justify-center my-20">
              <div className="w-full mx-4 md:max-w-[200px] bg-gray-50 block md:hidden h-[2px] relative">
                <Separator
                  className={`w-full h-[2px] bg-blue-500 transition-all duration-300 ease-in-out`}
                  style={{
                    width: `${(current / count) * 100}%`,
                  }}
                />
              </div>
            </div>
          </Carousel>
        )
      )}
    </div>
  )
}
