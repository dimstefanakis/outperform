import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { CircleInterface } from '@/types'

export function Circle({ data }: { data: CircleInterface }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[250px] h-[250px] 4xl:w-[350px] 4xl:h-[350px]  bg-black rounded-full flex flex-col items-center justify-center text-white p-5">
        <h3 className="text-4xl 4xl:text-[3rem] font-bold mt-0">{data.title}</h3>
        <h3 className="text-xl 4xl:text-[1.5rem] font-bold mt-0 mb-4">{data.subTitle}</h3>
        <p className="text-sm 4xl:text-[1.5rem] 4xl:leading-6 text-center p-4">{data.description}</p>
      </div>
      <div className="mt-4 text-center text-sm">
        {/* @ts-ignore */}
        <CustomPortableText paragraphClasses="4xl:text-[1.3rem] 4xl:leading-6 4xl:max-w-[400px]" value={data.outsideDescription} />
      </div>
    </div>
  )
}
