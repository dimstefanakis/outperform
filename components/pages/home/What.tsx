import CaseStudy from '@/components/shared/CaseStudy'
import ImageBox from '@/components/shared/ImageBox'
import { Separator } from '@/components/ui/separator'
import { WhatSection } from '@/types'

export function What({ data }: { data: WhatSection }) {
  return (
    <div id="what" className="w-full mt-20 md:mt-24 px-0 md:px-3 lg:px-3">
      <div className="flex w-full flex-col bg-black py-10 pt-24 px-4 lg:px-10 rounded-0 md:rounded-[25px]">
        {data.title && (
          <div>
            <span className="text-md font-bold text-blue-500">
              {data.title}
            </span>
            <Separator className="bg-blue-500 h-[2px] w-[30px]" />
          </div>
        )}
        <div className="flex flex-row">
          <div className="flex flex-col flex-1">
            {data.header && (
              <div className="text-white text-5xl md:text-7xl font-bold mt-6">
                {data.header}
              </div>
            )}
            {data.description && (
              <p className="text-gray-500 text-md md:text-lg mt-6 whitespace-break-spaces">
                {data.description}
              </p>
            )}
          </div>
          {data.clients && (
            <div className="flex flex-col flex-1 items-end md:flex-row justify-end">
              {data.clients.map((client, index) => (
                <ImageBox
                  key={index}
                  image={client.clientImage}
                  alt={client.clientName}
                  width={client.clientImage?.asset.metadata.dimensions.width}
                  height={client.clientImage?.asset.metadata.dimensions.height}
                  imageClasses="w-[60px] md:w-auto h-auto md:h-[30px] mb-10 md:mb-0 md:ml-10 object-contain"
                />
              ))}
            </div>
          )}
        </div>
        {data.caseStudies && (
          <div className="flex flex-col">
            {data.caseStudies.map((caseStudy, index) => (
              <div key={index} className="relative">
                <div className={`flex items-center mb-14 ${index === 0 ? 'md:mt-14' : ''}`}>
                  <div className="h-[2px] bg-white w-[25px]"></div>
                  <div className="flex-shrink-0 w-10 h-10 border-2 border-white rounded-md flex items-center justify-center relative">
                    <span className="text-white text-2xl font-bold mt-[4px]">#{index + 1}</span>
                  </div>
                  <div className="flex-grow h-[2px] bg-white flex-[3]"></div>
                </div>
                <CaseStudy
                  data={caseStudy}
                  isLast={index === (data.caseStudies?.length || 0) - 1}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
