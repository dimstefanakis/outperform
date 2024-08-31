import { WhoSection } from '@/types'
import { Circle } from '@/components/shared/Circle'
import { Separator } from '@/components/ui/separator'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { WhoCarousel } from './WhoCarousel'

export function Who({ data }: { data: WhoSection }) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col mt-24 px-4 lg:px-10">
        {data.header && (
          <div>
            <span className="text-md font-bold text-blue-500">
              {data.header}
            </span>
            <Separator className="bg-blue-500 w-[20px]" />
          </div>
        )}
        {data.title && (
          <div className="w-1/3 mt-6">
            <h1 className="text-4xl font-bold">{data.title}</h1>
          </div>
        )}
        {data.description && (
          <div className="w-full flex flex-col justify-center">
            <div className="w-full my-6">
              <Separator />
            </div>
            <div className="w-2/3">
              <p>{data.description}</p>
            </div>
          </div>
        )}
      </div>
      <WhoCarousel data={data} />
    </div>
  )
}
