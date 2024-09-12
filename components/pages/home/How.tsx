import { HowSection } from '@/types'

import Ads from './Ads'
import Consulting from './Consulting'
import Reporting from './Reporting'

export function How({ data }: { data: HowSection }) {
  return (
    <div id="how" className="w-full mt-24 px-0 md:px-3 lg:px-3">
      <div className="flex w-full flex-col py-10 px-4 lg:px-10 rounded-0 md:rounded-[50px]">
        {data.header && (
          <div>
            <span className="text-md font-bold text-blue-500">
              {data.header}
            </span>
          </div>
        )}
        {data.title && (
          <div className="text-black text-5xl md:text-7xl font-bold mt-6">
            {data.title}
          </div>
        )}
        {data.description && (
          <p className="text-gray-500 text-lg mt-6 whitespace-break-spaces">
            {data.description}
          </p>
        )}
        {data.ads && <Ads data={data.ads} />}
        {data.reporting && <Reporting data={data.reporting} />}
        {data.consulting && <Consulting data={data.consulting} />}
      </div>
    </div>
  )
}
