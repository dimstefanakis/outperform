import { Circle } from '@/components/shared/Circle'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { WhoSection } from '@/types'

import { WhoCarousel } from './WhoCarousel'

export function Who({ data }: { data: WhoSection }) {
  return (
    <div id="who" className="flex w-full flex-col">
      <div className="flex w-full flex-col mt-24 px-4 lg:px-10">
        {data.header && (
          <div>
            <span className="text-md 5xl:text-[1.5rem] font-bold text-blue-500">
              {data.header}
            </span>
            <Separator className="bg-blue-500 h-[2px] w-[30px]" />
          </div>
        )}
        {data.title && (
          <div className="w-full md:w-1/3 mt-6">
            <h1 className="text-5xl md:text-7xl 5xl:text-[5rem] font-bold">{data.title}</h1>
          </div>
        )}
        {data.description && (
          <div className="w-full flex flex-col justify-center">
            <div className="w-full my-6">
              <Separator />
            </div>
            <div className="w-2/3">
              <p className="text-gray-500 5xl:max-w-[500px] 5xl:text-[1.5rem] lg:max-w-[300px]">
                {data.description}
              </p>
            </div>
          </div>
        )}
      </div>
      <WhoCarousel data={data} />
      {data.footerHeader && (
        <div className="w-full flex justify-end px-4 lg:px-10">
          <div className="font-semibold text-3xl 5xl:text-[3rem] text-right">
            <CustomPortableText value={data.footerHeader}
              paragraphStyles={{
                margin: '0px',
              }}
            />
          </div>
        </div>
      )}
      {data.footerDescription && (
        <div className="px-4 lg:px-10 w-full">
          <Separator className="w-full my-10" />
          <div className="w-full flex justify-start">
            <p className="w-full max-w-[75%] 5xl:max-w-[500px] 5xl:text-[1.4rem] md:max-w-md text-gray-500 whitespace-break-spaces">
              {data.footerDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
