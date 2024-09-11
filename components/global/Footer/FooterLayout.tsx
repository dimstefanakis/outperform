import Link from 'next/link'
import type { PortableTextBlock } from 'next-sanity'

import { Separator } from '@/components/ui/separator'
import { CustomPortableText } from '@/components//shared/CustomPortableText'
import type { SettingsPayload, FooterPayload } from '@/types'
import ImageBox from '@/components/shared/ImageBox'

interface FooterProps {
  data: FooterPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data
  return (
    <footer className="bottom-0 w-full flex justify-center items-center bg-white text-center ">
      <div className="w-full text-gray-500 max-w-[90%] border-t border-gray-200 py-3 md:py-3 flex">
        {footer && footer.leftItems && (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center">
            {footer.leftItems.map((item, index) => (
              <div key={index} className="mr-3">
                <Link href={item.url || ''}>{item.text}</Link>
              </div>
            ))}
          </div>
        )}
        {footer && footer.rightItems && (
          <div className="flex flex-row justify-end flex-1">
            {footer.rightItems.map((item, index) => (
              <div key={index} className="ml-3">
                <Link href={item.url ? item.url : ''}>
                  <ImageBox
                    image={item.logo}
                    alt={item.text || ''}
                    width={item.logo?.asset.metadata.dimensions.width}
                    height={item.logo?.asset.metadata.dimensions.height}
                    imageClasses="w-10 h-10"
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </footer>
  )
}
