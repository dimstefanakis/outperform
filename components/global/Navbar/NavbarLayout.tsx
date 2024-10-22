'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import BurgerMenu from '@/components/shared/BurgerMenu'
import ImageBox from '@/components/shared/ImageBox'
import AuditForm from '@/components/AuditForm'
import useMediaQuery from '@/hooks/useMediaQuery'
import type { NavigationItem, NavigationPayload } from '@/types'

interface NavbarProps {
  data: NavigationPayload
}

export default function Navbar(props: NavbarProps) {
  const [isAuditFormOpen, setIsAuditFormOpen] = useState(false)
  const { data } = props
  const menuItems = data?.navItems || ([] as NavigationItem[])
  const [isSticky, setIsSticky] = useState(false)
  const isLaptop = useMediaQuery('(min-width: 1024px)')
  const searchParams = useSearchParams()
  const formParam = searchParams.get('form')

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom - 50
        setIsSticky(heroBottom <= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (formParam === 'true') {
      setIsAuditFormOpen(true)
    }
  }, [formParam])

  let isSafari = false
  try {
    isSafari = (navigator.vendor &&
      navigator.vendor.indexOf('Apple') > -1 &&
      navigator.userAgent &&
      navigator.userAgent.indexOf('CriOS') == -1 &&
      navigator.userAgent.indexOf('FxiOS') == -1) as boolean
  } catch (e) {
    console.log(e)
  }

  return (
    <nav
      className={`fixed flex items-center h-[70px] lg:h-[100px] px-6 lg:px-10 top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? `${isSafari ? '' : 'backdrop-blur-md'} mix-blend-difference` : 'bg-transparent'}`}
      style={{
        height: isSticky ? '70px' : '',
      }}
    >
      <div className="container mx-auto px-0 lg:px-4 5xl:max-w-[1600px]">
        <div className="flex items-center justify-between py-4 relative">
          <div className="flex items-center">
            <ImageBox
              image={data?.logo}
              height={data?.logo?.asset?.metadata?.dimensions?.height}
              width={data?.logo?.asset?.metadata?.dimensions?.width}
              alt="Logo"
              classesWrapper="w-[160px] 5xl:w-[200px] object-contain relative"
            />
          </div>
          {isLaptop ? (
            <div className="flex justify-center items-center space-x-6 absolute left-0 w-full">
              {menuItems.map((menuItem, key) => {
                const href = menuItem?.link
                if (!href) {
                  return null
                }
                return (
                  <Link
                    key={key}
                    className={`text-xl 5xl:text-[1.6rem] transition-colors duration-200 ${isSticky ? 'text-white' : 'text-white'}`}
                    href={href}
                  >
                    {menuItem.label}
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="flex w-full justify-end">
              <BurgerMenu menuItems={menuItems} logo={data.logo} />
            </div>
          )}
          {isLaptop ? (
            <div className="absolute right-0 flex">
              <Link
                href={data.contactCTA.link || ''}
              >
                <div className="flex justify-center items-center">
                  <ImageBox
                    image={data.contactCTA.icon}
                    height={
                      data.contactCTA.icon?.asset?.metadata?.dimensions?.height
                    }
                    width={
                      data.contactCTA.icon?.asset?.metadata?.dimensions?.width
                    }
                    alt="Contact Icon"
                    classesWrapper="w-[16px] 5xl:w-[20px] mr-2 mb-1 object-contain rounded-none"
                  />
                  <span className="text-white 5xl:text-[1.6rem]">{data.contactCTA.text}</span>
                </div>
              </Link>
              <div className="flex justify-center items-center ml-4 cursor-pointer"
                onClick={() => setIsAuditFormOpen(true)}
              >
                <ImageBox
                  image={data.auditCTA?.icon}
                  height={data.auditCTA?.icon?.asset?.metadata?.dimensions?.height}
                  width={data.auditCTA?.icon?.asset?.metadata?.dimensions?.width}
                  alt="Audit Icon"
                  classesWrapper="w-[16px] 5xl:w-[20px] mr-2 mb-1 object-contain rounded-none"
                />
                <span className="text-white 5xl:text-[1.6rem]">{data.auditCTA?.text}</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <AuditForm isOpen={isAuditFormOpen} onClose={() => setIsAuditFormOpen(false)} logo={data.logo} />
    </nav>
  )
}
