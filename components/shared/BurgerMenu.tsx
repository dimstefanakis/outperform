'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, MessageSquare, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import type { NavigationItem, NavigationPayload } from '@/types'
import ImageBox from './ImageBox'
import AuditForm from '@/components/AuditForm'
import Image from 'next/image'

export default function BurgerMenu({
  menuItems,
  logo,
}: {
  menuItems: NavigationItem[]
  logo: NavigationPayload['logo']
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuditFormOpen, setIsAuditFormOpen] = useState(false)

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="z-50 bg-transparent hover:bg-transparent"
        >
          <Menu className="h-6 w-6" color="white" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[400px] bg-[#242424] border-0 text-white"
      >
        <div className="flex justify-between items-center mb-6">
          <ImageBox
            image={logo}
            alt={'Outperform logo'}
            width={logo?.asset.metadata.dimensions.width}
            height={logo?.asset.metadata.dimensions.height}
            imageClasses="h-4 object-contain"
          />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <div className="h-4" /> {/* Space */}
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item, i) => (
              <motion.li
                key={item.label}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                <a
                  href={item.link}
                  className="block py-2 text-lg hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <Separator className="my-6 bg-[#ABABAB]" />
        <motion.div
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          custom={menuItems.length}
        >
          <Link
            href="mailto:hello@outperformagency.com"
            className="flex items-center py-2 text-lg hover:text-primary transition-colors cursor-pointer"
          >
            <Image src="/blue.png" alt="Blue arrow" width={20} height={20} className="mr-2 transform mb-1" />
            Drop us a line
          </Link>
        </motion.div>
        <motion.div
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          custom={menuItems.length + 1}
        >
          <div
            className="flex items-center py-2 text-lg hover:text-primary transition-colors cursor-pointer"
            onClick={() => {
              setIsAuditFormOpen(true)
              setIsOpen(false)
            }}
          >
            <Image src="/blue.png" alt="Blue arrow" width={20} height={20} className="mr-2 transform mb-1" />
            Free Audit
          </div>
        </motion.div>
      </SheetContent>
      <AuditForm isOpen={isAuditFormOpen} onClose={() => setIsAuditFormOpen(false)} logo={logo} />
    </Sheet>
  )
}
