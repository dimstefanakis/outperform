import Link from 'next/link'
import type { PortableTextBlock } from 'next-sanity'

import { Separator } from '@/components/ui/separator'
import { CustomPortableText } from '@/components//shared/CustomPortableText'
import type { SettingsPayload, FooterPayload } from '@/types'

interface FooterProps {
  data: FooterPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data
  return (
    <footer className="bottom-0 w-full flex justify-center items-center bg-white  text-center ">
      <div className="w-full md:max-w-[95%] border-t border-gray-200 py-3 md:py-3 flex">
        {footer && footer.leftItems && (
          <div className="flex flex-col md:flex-row items-center justify-center">
            {footer.leftItems.map((item, index) => (
              <div key={index} className="mr-3">
                <Link href={item.url || ''}>{item.text}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </footer>
  )
}
