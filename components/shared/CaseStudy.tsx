import { Separator } from '@/components/ui/separator'
import ImageBox from './ImageBox'
import { CaseStudy as CaseStudyInterface } from '@/types'

export default function CaseStudy({ data }: { data: CaseStudyInterface }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="grid grid-cols-2">
        <div className="flex flex-col text-white mb-10">
          <h1 className="text-4xl whitespace-break-spaces">
            {data?.studyTitle}
          </h1>
          <span className="text-gray-500 mt-6 mb-12">
            {data?.studyDescription}
          </span>
        </div>
        {data?.studyPillars?.map((pillar, index) => (
          <div
            key={index}
            className={`flex flex-col mb-6 col-span-2 md:col-span-${pillar.columnSpan}`}
          >
            <h3 className="text-sm font-bold text-white uppercase">
              {pillar.title}
            </h3>
            <Separator className="w-[50px] my-4 bg-white" />
            <p className="text-lg max-w-full md:max-w-[80%] ml-0 md:ml-6 text-gray-500">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col">
        <ImageBox
          image={data?.image}
          height={data?.image?.asset?.metadata?.dimensions?.height}
          width={data?.image?.asset?.metadata?.dimensions?.width}
          alt="background image"
          classesWrapper="w-full object-cover relative"
        />
      </div>
    </div>
  )
}
