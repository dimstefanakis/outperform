import ImageBox from '@/components/shared/ImageBox'
import { Separator } from '@/components/ui/separator'
import { AdsSection } from '@/types'

export default function Ads({ data }: { data: AdsSection }) {
  return (
    <div className="flex flex-col w-full mt-12">
      <div className="flex w-full flex-col">
        {data.title && (
          <div className="text-black text-3xl font-bold  mb-6">
            {data.title}
          </div>
        )}
        <div className="flex flex-col md:flex-row w-full">
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
                    <span className="text-xl font-bold text-left md:text-center text-gray-500 m-0">
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
