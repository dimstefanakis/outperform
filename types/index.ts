import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

export interface Client {
  clientName?: string
  clientImages?: Image[]
}

export interface CarouselItem {
  title?: string
  description?: string
}

export interface StudyPillar {
  title?: string
  description?: string
  columnSpan?: number
  rowSpan?: number
  carousel?: CarouselItem[]
}

export interface CaseStudy {
  clientImage?: Image
  imagePosition?: 'right' | 'left'
  studyTitle?: string
  studyDescription?: string
  image?: Image
  studyPillars?: StudyPillar[]
}

export interface WhatSection {
  title?: string
  header?: string
  description?: string
  backgroundColor?: string
  clients?: Client[]
  caseStudies?: CaseStudy[]
}

export interface ReportingItem {
  image?: {
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
  title?: string
  description?: string
  icon?: {
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
}

export interface ConsultingItem {
  image?: {
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
  title?: string
  description?: string
  icon?: {
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
}

export interface AdItem {
  image?: {
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
  title?: string
}

export interface ReportingSection {
  title?: string
  icon?: {
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
  reporting_items?: ReportingItem[]
}

export interface ConsultingSection {
  title?: string
  icon?: {
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
  consulting_items?: ConsultingItem[]
}

export interface AdsSection {
  title?: string
  icon?: {
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
  ad_items?: AdItem[]
}

export interface HowSection {
  header?: string
  title?: string
  description?: string
  reporting?: ReportingSection
  consulting?: ConsultingSection
  ads?: AdsSection
}

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
  footerDescription: string
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
  what?: WhatSection
  how?: HowSection
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
