'use client'

import { useSettings, useNavigation } from '@/sanity/loader/useQuery'

import NavbarLayout from './NavbarLayout'

type Props = {
  initial: Parameters<typeof useNavigation>[0]
}

export default function NavbarPreview(props: Props) {
  const { data } = useNavigation(props.initial)

  return <NavbarLayout data={data!} />
}
