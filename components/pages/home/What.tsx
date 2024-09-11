import CaseStudy from '@/components/shared/CaseStudy'
import { Separator } from '@/components/ui/separator'
import { WhatSection } from '@/types'

export function What({ data }: { data: WhatSection }) {
  return (
    <div id="what" className="w-full mt-24 px-0 md:px-3 lg:px-3">
      <div className="flex w-full flex-col bg-black py-10 px-4 lg:px-10 rounded-0 md:rounded-[25px]">
        {data.title && (
          <div>
            <span className="text-md font-bold text-blue-500">
              {data.title}
            </span>
            <Separator className="bg-blue-500 w-[20px]" />
          </div>
        )}
        {data.header && (
          <div className="text-white text-5xl md:text-7xl font-bold mt-6">
            {data.header}
          </div>
        )}
        {data.description && (
          <p className="text-gray-500 text-lg mt-6 whitespace-break-spaces">
            {data.description}
          </p>
        )}
        <Separator className="w-full my-6 bg-gray-500" />
        {data.caseStudies && (
          <div className="flex flex-col">
            {data.caseStudies.map((caseStudy, index) => (
              <CaseStudy key={index} data={caseStudy} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
