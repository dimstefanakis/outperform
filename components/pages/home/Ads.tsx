import ImageBox from '@/components/shared/ImageBox'
import { Separator } from '@/components/ui/separator'
import { AdsSection } from '@/types'

export default function Ads({ data }: { data: AdsSection }) {
  return (
    <div className="flex flex-col w-full my-14 md:my-20">
      <div className="flex w-full flex-col">
        {data.title && (
          <div className="text-black text-4xl md:text-5xl font-bold mt-6 mb-10 flex">
            <ImageBox
              image={data.icon}
              height={data.icon?.asset.metadata.dimensions.height}
              width={data.icon?.asset.metadata.dimensions.width}
              alt={data.title}
              classesWrapper="w-[30px] min-w-[30px] md:w-[40px] md:min-w-[40px] mr-2 object-contain rounded-none"
            />
            <span>{data.title}</span>
          </div>
        )}
        <div className="flex flex-col my-6 md:my-0 md:flex-row w-full">
          {data.ad_items?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start md:items-center h-auto md:h-[100px] flex-grow justify-between md:mt-4"
            >
              <div className="flex flex-row w-full h-full items-center">
                <div className="h-full justify-between md:flex flex-col items-start md:items-center w-full">
                  <div className="hidden md:flex flex-col items-start md:items-center w-full">
                    <ImageBox
                      image={item.image}
                      alt={item.title}
                      height={item?.image?.asset?.metadata?.dimensions?.height}
                      width={item?.image?.asset?.metadata?.dimensions?.width}
                      classesWrapper="h-[50px] lg:h-26 object-contain"
                      imageClasses="h-full"
                    />
                  </div>
                  <div className="flex flex-col w-full m-0">
                    <span className="text-xl font-bold text-left md:text-center text-gray-500 md:text-black m-0">
                      {item.title}
                    </span>
                  </div>
                </div>
                {data.ad_items?.length &&
                  data.ad_items?.length - 1 !== index && (
                    <div className="w-[1px] h-[35%] bg-gray-400"></div>
                  )}
              </div>
              <div className="block w-full md:hidden">
                {data.ad_items?.length &&
                  data.ad_items?.length - 1 !== index && (
                    <Separator className="w-full my-6" />
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
