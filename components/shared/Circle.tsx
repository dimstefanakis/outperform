import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { CircleInterface } from '@/types'

export function Circle({ data }: { data: CircleInterface }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[200px] h-[200px] sm:w-[225px] sm:h-[225px] md:w-[250px] md:h-[250px] 2xl:w-[300px] 2xl:h-[300px] bg-black rounded-full flex flex-col items-center justify-center text-white p-4 sm:p-5">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-0">{data.title}</h3>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-0 mb-2 sm:mb-3 md:mb-4">{data.subTitle}</h3>
        <p className="text-xs sm:text-sm md:text-base text-center p-2 sm:p-3 md:p-4">{data.description}</p>
      </div>
      <div className="mt-3 sm:mt-4 text-center text-xs sm:text-sm md:text-base">
        {/* @ts-ignore */}
        <CustomPortableText value={data.outsideDescription} />
      </div>
    </div>
  )
}
