'use client'
import { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { CaseStudy as CaseStudyInterface } from '@/types'
import { type CarouselApi } from '@/components/ui/carousel'
import useMediaQuery from '@/hooks/useMediaQuery'

import ImageBox from './ImageBox'

export default function CaseStudy({
  data,
  isLast,
  index,
}: {
  data: CaseStudyInterface
  isLast: boolean
  index: number
}) {
  const isLaptop = useMediaQuery('(min-width: 600px)')
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const hasFullHeightCarousel = data?.studyPillars?.some(
    (pillar) => pillar.carousel,
  )
  const hasFullHeightPillar = data?.studyPillars?.some(
    (pillar) => pillar.rowSpan === 2,
  )

  function applyBorderBottom(index: number) {
    if (isLaptop) {
      // If there is a carousel or a full height pillar, we need to apply border bottom to the first element
      if (hasFullHeightCarousel || hasFullHeightPillar) {
        return index === 0 ? 'border-b-[1px]' : ''
      }
      // If there is no carousel or full height pillar, we need to apply border bottom to all elements except the last one
      else if (
        data?.studyPillars?.length &&
        index === data?.studyPillars.length - 1
      ) {
        return ''
      }
      return 'border-b-[1px]'
    } else {
      if (
        data?.studyPillars?.length &&
        index === data?.studyPillars.length - 1
      ) {
        return ''
      } else {
        return 'border-b-[1px]'
      }
    }
  }

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
    <>
      <div className={`relative ${index !== 0 ? 'my-10' : 'mb-10'}`}>
        {/* Index number */}
        <div className="hidden md:block absolute left-0 top-0 flex items-center">
          <div className="flex-shrink-0 w-10 h-10 border-2 border-white rounded-md flex items-center justify-center bg-black">
            <span className="text-white text-2xl font-bold mt-[4px]">#{index + 1}</span>
          </div>
        </div>
        <div className="xl:grid my-0 xl:grid-cols-2 gap-20 md:ml-20">
          <div
            className={`flex flex-col relative p-6 md:p-0`}
            style={{
              order:
                data?.imagePosition === 'right' || !data?.imagePosition ? 1 : 2,
            }}
          >
            <div className="flex flex-col text-white mb-10 z-10">
              <ImageBox
                image={data?.clientImage}
                height={data?.clientImage?.asset?.metadata?.dimensions?.height}
                width={data?.clientImage?.asset?.metadata?.dimensions?.width}
                alt="client image"
                classesWrapper="h-12 5xl:h-[100px] mt-12 xl:mt-0 mb-24 flex justify-center xl:justify-start mx-auto xl:mr-auto md:mx-0 min-w-[300px]"
                imageClasses="object-contain h-full w-auto"
                imagesStyles={{
                  width: 'auto',
                }}
              />
              <h1 className="text-3xl m-0 md:ml-8 5xl:text-[4rem] 5xl:leading-[3.5rem] xl:ml-0 whitespace-break-spaces">
                {data?.studyTitle}
              </h1>
              {isLaptop && (
                <span className="text-gray-500 5xl:text-[2rem] ml-8 xl:ml-0 text-xl mt-6 mb-24">
                  {data?.studyDescription}
                </span>
              )}
            </div>
            <div
              className={`grid grid-cols-2 z-10 ${hasFullHeightCarousel || hasFullHeightPillar ? 'md:grid-rows-2 md:grid-flow-col' : ''} gap-0`}
            >
              {data?.studyPillars?.map((pillar, index) => (
                <div
                  key={index}
                  className={`
                    flex flex-col pr-0 md:pr-8 p-8 ${index == 0 && !isLaptop ? 'pt-0' : ''} border-[#3F3F3F]
                    ${pillar.carousel || pillar.rowSpan === 2 ? 'col-span-2 md:col-span-1 md:row-span-2 md:order-10 md:border-l-[1px] border-gray-500' : `col-span-2 md:col-span-${pillar.columnSpan || 1} ${applyBorderBottom(index)} border-gray-500`}
                  `}
                  style={
                    !isLaptop
                      ? {
                          borderLeftWidth: '1px',
                        }
                      : {}
                  }
                >
                  {!isLaptop && index == 0 && (
                    <span className="text-gray-500 text-xl mt-0 mb-12">
                      {data?.studyDescription}
                    </span>
                  )}
                  <h3 className="text-lg 5xl:text-[2rem] 5xl:leading-[2rem] font-bold text-white whitespace-break-spaces uppercase">
                    {pillar.title}
                  </h3>
                  <Separator className="w-[50px] my-4 bg-white" />
                  {pillar.description && (
                    <p className="text-md 5xl:text-[1.5rem] 5xl:leading-[2rem] whitespace-break-spaces max-w-full ml-6 text-gray-500">
                      {pillar.description}
                    </p>
                  )}

                  {pillar.carousel && (
                    <Carousel
                      setApi={setApi}
                      className={pillar.carousel ? 'flex-1 mt-6 md:px-4 max-w-[400px]' : ''}
                    >
                      <CarouselContent
                        className={pillar.carousel ? 'h-full ml-6 md:ml-0' : ''}
                      >
                        {pillar.carousel.map((carouselItem, index) => (
                          <CarouselItem
                            key={index}
                            className={
                              pillar.carousel
                                ? `h-full w-[100%] pl-0 md:pl-4 ${index !== 0 ? 'px-2' : ''} md:px-2`
                                : ''
                            }
                          >
                            <div className="flex flex-col bg-[#242424] rounded-lg p-4 h-full">
                              <h3 className="text-sm 5xl:text-[1.5rem] 5xl:leading-[1.5rem] font-bold text-white uppercase">
                                {carouselItem.title}
                              </h3>
                              <Separator className="w-[50px] my-4 bg-white" />
                              <p className="text-xs 5xl:text-[1.2rem] 5xl:leading-[1.5rem] max-w-full whitespace-break-spaces ml-0 text-gray-500 flex-grow">
                                {carouselItem.description}
                              </p>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="md:left-0 left-[0px]" />
                      <CarouselNext className="md:right-0 right-[-25px]" />
                      <div className="w-full flex items-center justify-center mt-4">
                        <div className="w-full mx-6 mr-0 bg-gray-500 h-[2px] md:mx-2 relative">
                          <Separator
                            className={`w-full h-[2px] bg-blue-500 transition-all duration-300 ease-in-out`}
                            style={{
                              width: `${(current / count) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </Carousel>
                  )}
                </div>
              ))}
            </div>
            <div
              className={`block absolute xl:hidden top-0 left-0 w-full h-full z-[1]`}
            >
              <ImageBox
                image={data?.image}
                height={data?.image?.asset?.metadata?.dimensions?.height}
                width={data?.image?.asset?.metadata?.dimensions?.width}
                alt="background image"
                classesWrapper="w-full h-full max-h-[1000px] md:max-h-[auto] object-cover"
                imageClasses="h-full object-cover rounded-lg full-opacity-to-transparent"
              />
            </div>
          </div>
          <div
            className={`hidden xl:flex col-span-2 xl:col-span-1 flex-col`}
            style={{
              order:
                data?.imagePosition === 'right' || !data?.imagePosition ? 2 : 1,
            }}
          >
            <ImageBox
              image={data?.image}
              height={data?.image?.asset?.metadata?.dimensions?.height}
              width={data?.image?.asset?.metadata?.dimensions?.width}
              alt="background image"
              classesWrapper="w-full object-cover relative"
            />
          </div>
        </div>
      </div>
      {!isLast && (
        <div className="flex items-center ml-20 hidden xl:block">
          <Separator className="w-full h-[1px] bg-[#222222] my-10" />
        </div>
      )}
    </>
  )
}
