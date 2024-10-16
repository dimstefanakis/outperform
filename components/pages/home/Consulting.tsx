'use client'
import { useEffect, useState } from 'react'

import ImageBox from '@/components/shared/ImageBox'
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
import { ConsultingSection } from '@/types'

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
    <div className="flex flex-col w-full my-10 md:my-20">
      <div className="flex w-full flex-col">
        {data.title && (
          <div className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-10 flex">
            <ImageBox
              image={data.icon}
              height={data.icon?.asset.metadata.dimensions.height}
              width={data.icon?.asset.metadata.dimensions.width}
              alt={data.title}
              classesWrapper="w-[25px] min-w-[25px] sm:w-[30px] sm:min-w-[30px] md:w-[35px] md:min-w-[35px] lg:w-[40px] lg:min-w-[40px] mr-2 object-contain rounded-none"
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
                    <div className="flex flex-row items-center">
                      <h3 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold my-0">
                        {item.title}
                      </h3>
                      <ImageBox
                        image={item.icon}
                        height={item.icon?.asset.metadata.dimensions.height}
                        width={item.icon?.asset.metadata.dimensions.width}
                        alt={item.title}
                        classesWrapper="w-[20px] min-w-[20px] sm:w-[25px] sm:min-w-[25px] md:w-[30px] md:min-w-[30px] ml-2 object-contain rounded-none rotate-[270deg] mb-2"
                      />
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl mt-2 max-w-[75%] lg:max-w-[270px] 2xl:max-w-[400px]">
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
                      <div className="flex flex-row items-center">
                        <p className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-6">
                          {item.title}
                        </p>
                        <ImageBox
                          image={item.icon}
                          height={item.icon?.asset.metadata.dimensions.height}
                          width={item.icon?.asset.metadata.dimensions.width}
                          alt={item.title}
                          classesWrapper="w-[15px] min-w-[15px] sm:w-[20px] sm:min-w-[20px] md:w-[25px] md:min-w-[25px] ml-2 mb-0 mt-1 object-contain rounded-none rotate-[270deg]"
                        />
                      </div>
                      <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl mt-2 max-w-[75%] lg:max-w-[270px]">
                        {item.description}
                      </p>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <div className="w-full flex items-center justify-center my-6 md:my-20">
              <div className="w-full md:max-w-[200px] bg-gray-50 block md:hidden h-[2px] relative">
                <Separator
                  className={`w-full h-[2px] bg-blue-500 transition-all duration-300 ease-in-out mx-0`}
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
