import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

export interface CircleInterface {
  title: string
  description?: string
  subTitle?: string
  outsideDescription?: PortableTextBlock[]
}

interface ColorAnnotation {
  _type: 'color'
  hex: string
}

type FooterHeaderBlock = PortableTextBlock & {
  marks?: {
    annotations?: ColorAnnotation[]
  }
}

export interface WhoSection {
  header: string
  title: string
  description: string
  circles: CircleInterface[]
  footerHeader: FooterHeaderBlock[]
}

export interface HeroSection {
  background?: {
    asset: {
      url: string
      metadata: {
        dimensions: {
          aspectRatio: number
          height: number
          width: number
        }
      }
    }
  }
  logo?: Image
  contactCTA?: {
    text: string
    icon: Image
    link: string
  }
  title?: string
  overview?: PortableTextBlock[]
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  hero?: HeroSection
  who?: WhoSection
  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}

export interface NavigationItem {
  label: string
  link: string
}

export interface ContactCTA {
  text: string
  icon: Image
  link: string
}

export interface NavigationPayload {
  title?: string
  logo?: {
    asset: {
      url: string
      metadata: {
        dimensions: {
          aspectRatio: number
          height: number
          width: number
        }
      }
    }
  }
  navItems: NavigationItem[]
  contactCTA: ContactCTA
}
