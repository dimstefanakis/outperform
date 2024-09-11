import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { CaseStudy as CaseStudyInterface } from '@/types'

import ImageBox from './ImageBox'

export default function CaseStudy({ data }: { data: CaseStudyInterface }) {
  const hasFullHeightCarousel = data?.studyPillars?.some(
    (pillar) => pillar.carousel,
  )
  const hasFullHeightPillar = data?.studyPillars?.some(
    (pillar) => pillar.rowSpan === 2,
  )

  return (
    <div>
      <div className="grid my-10 md:grid-cols-2 gap-4">
        <div className="flex flex-col relative p-6 md:p-0">
          <div className="flex flex-col text-white mb-10 z-10">
            <h1 className="text-4xl whitespace-break-spaces">
              {data?.studyTitle}
            </h1>
            <span className="text-gray-500 mt-6 mb-12">
              {data?.studyDescription}
            </span>
          </div>
          <div
            className={`grid grid-cols-2 z-10 ${hasFullHeightCarousel || hasFullHeightPillar ? 'md:grid-rows-2 lg:grid-flow-col' : ''} gap-4`}
          >
            {data?.studyPillars?.map((pillar, index) => (
              <div
                key={index}
                className={`
                  flex flex-col mb-6
                  ${pillar.carousel || hasFullHeightPillar ? 'col-span-2 md:col-span-1 md:row-span-2' : `col-span-2 md:col-span-${pillar.columnSpan || 1}`}
                `}
              >
                <h3 className="text-sm font-bold text-white uppercase">
                  {pillar.title}
                </h3>
                <Separator className="w-[50px] my-4 bg-white" />
                {pillar.description && (
                  <p className="text-lg max-w-full md:max-w-[80%] ml-0 md:ml-6 text-gray-500">
                    {pillar.description}
                  </p>
                )}
                {pillar.carousel && (
                  <Carousel
                    className={pillar.carousel ? 'flex-1 mt-6 px-4' : ''}
                  >
                    <CarouselContent
                      className={pillar.carousel ? 'h-full ml-0' : ''}
                    >
                      {pillar.carousel.map((carouselItem, index) => (
                        <CarouselItem
                          key={index}
                          className={
                            pillar.carousel ? 'h-full w-[100%]  px-2  ' : ''
                          }
                        >
                          <div className="flex flex-col bg-[#242424] rounded-lg p-4 h-full">
                            <h3 className="text-sm font-bold text-white uppercase">
                              {carouselItem.title}
                            </h3>
                            <Separator className="w-[50px] my-4 bg-white" />
                            <p className="text-xs max-w-full whitespace-break-spaces ml-0 text-gray-500 flex-grow">
                              {carouselItem.description}
                            </p>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                  </Carousel>
                )}
              </div>
            ))}
          </div>
          <div className="block absolute md:hidden top-0 left-0 w-full h-full z-[1]">
            <ImageBox
              image={data?.image}
              height={data?.image?.asset?.metadata?.dimensions?.height}
              width={data?.image?.asset?.metadata?.dimensions?.width}
              alt="background image"
              classesWrapper="w-full h-full object-cover"
              imageClasses="h-full object-cover rounded-lg full-opacity-to-transparent"
            />
          </div>
        </div>
        <div className="hidden md:flex col-span-2 md:col-span-1 flex-col">
          <ImageBox
            image={data?.image}
            height={data?.image?.asset?.metadata?.dimensions?.height}
            width={data?.image?.asset?.metadata?.dimensions?.width}
            alt="background image"
            classesWrapper="w-full object-cover relative"
          />
        </div>
      </div>
      <Separator className="w-full my-10 bg-gray-500" />
    </div>
  )
}
