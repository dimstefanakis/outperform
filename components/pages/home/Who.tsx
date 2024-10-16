import { Circle } from '@/components/shared/Circle'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Separator } from '@/components/ui/separator'
import { WhoSection } from '@/types'

import { WhoCarousel } from './WhoCarousel'

export function Who({ data }: { data: WhoSection }) {
  return (
    <div id="who" className="flex w-full flex-col">
      <div className="flex w-full flex-col mt-16 sm:mt-20 md:mt-24 px-4 lg:px-10">
        {data.header && (
          <div>
            <span className="text-sm sm:text-base md:text-lg font-bold text-blue-500">
              {data.header}
            </span>
            <Separator className="bg-blue-500 h-[2px] w-[30px]" />
          </div>
        )}
        {data.title && (
          <div className="w-full md:w-1/3 mt-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold">
              {data.title}
            </h1>
          </div>
        )}
        {data.description && (
          <div className="w-full flex flex-col justify-center">
            <div className="w-full my-6">
              <Separator />
            </div>
            <div className="w-full sm:w-2/3 md:w-1/2">
              <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl">
                {data.description}
              </p>
            </div>
          </div>
        )}
      </div>
      <WhoCarousel data={data} />
      {data.footerHeader && (
        <div className="w-full flex justify-end px-4 lg:px-10 mt-8 sm:mt-12 md:mt-16">
          <div className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-right">
            <CustomPortableText
              value={data.footerHeader}
              paragraphStyles={{
                margin: '0px',
              }}
            />
          </div>
        </div>
      )}
      {data.footerDescription && (
        <div className="px-4 lg:px-10 w-full">
          <Separator className="w-full my-8 sm:my-10" />
          <div className="w-full flex justify-start">
            <p className="w-full max-w-[75%] md:max-w-md text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl whitespace-break-spaces">
              {data.footerDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}