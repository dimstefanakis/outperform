'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Menu, X, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import type { NavigationItem, NavigationPayload } from '@/types'

export default function BurgerMenu({
  menuItems,
}: {
  menuItems: NavigationItem[]
}) {
  const [isOpen, setIsOpen] = useState(false)

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
        <Button variant="ghost" size="icon" className="z-50">
          <Menu className="h-6 w-6" color="white" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex justify-between items-center mb-6">
          <div className="font-bold text-2xl">Logo</div>
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
        <Separator className="my-6" />
        <motion.div
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          custom={menuItems.length}
        >
          <a
            href="#contact"
            className="flex items-center py-2 text-lg hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Drop us a line
          </a>
        </motion.div>
      </SheetContent>
    </Sheet>
  )
}
