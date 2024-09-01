'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ImageBox from '@/components/shared/ImageBox'
import type { NavigationPayload, NavigationItem } from '@/types'

interface NavbarProps {
  data: NavigationPayload
}

export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.navItems || ([] as NavigationItem[])
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsSticky(heroBottom <= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed flex items-center h-[70px] lg:h-[100px] px-6 lg:px-10 top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'backdrop-blur-md mix-blend-difference' : 'bg-transparent'}`}
      style={{
        height: isSticky ? '70px' : '',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <ImageBox
              image={data?.logo}
              height={data?.logo?.asset?.metadata?.dimensions?.height}
              width={data?.logo?.asset?.metadata?.dimensions?.width}
              alt="Logo"
              classesWrapper="w-[80px] object-contain relative"
            />
          </div>
          <div className="flex items-center space-x-6">
            {menuItems.map((menuItem, key) => {
              const href = menuItem?.link
              if (!href) {
                return null
              }
              return (
                <Link
                  key={key}
                  className={`text-lg transition-colors duration-200 ${isSticky ? 'text-white' : 'text-white'}`}
                  href={href}
                >
                  {menuItem.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
