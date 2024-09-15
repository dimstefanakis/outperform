import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  imageClasses?: string
  'data-sanity'?: string
  imagesStyles?: any
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
  classesWrapper,
  imageClasses,
  imagesStyles = {},
  ...props
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url()

  return (
    <div
      className={`overflow-hidden rounded-[3px] ${classesWrapper}`}
      data-sanity={props['data-sanity']}
    >
      {imageUrl && (
        <Image
          className={`w-full ${imageClasses}`}
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
          style={imagesStyles}
        />
      )}
    </div>
  )
}
