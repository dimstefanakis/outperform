'use client'

import { useFooter } from '@/sanity/loader/useQuery'

import FooterLayout from './FooterLayout'

type Props = {
  initial: Parameters<typeof useFooter>[0]
}

export default function NavbarPreview(props: Props) {
  const { data } = useFooter(props.initial)

  return <FooterLayout data={data!} />
}
