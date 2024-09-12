import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { CircleInterface } from '@/types'

export function Circle({ data }: { data: CircleInterface }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[250px] h-[250px] bg-black rounded-full flex flex-col items-center justify-center text-white p-5">
        <h3 className="text-4xl font-bold mt-0">{data.title}</h3>
        <h3 className="text-xl font-bold mt-0 mb-4">{data.subTitle}</h3>
        <p className="text-sm text-center p-4">{data.description}</p>
      </div>
      <div className="mt-4 text-center text-sm">
        {/* @ts-ignore */}
        <CustomPortableText value={data.outsideDescription} />
      </div>
    </div>
  )
}
