import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload, NavigationPayload } from '@/types'

import { Hero } from './Hero'
import { How } from './How'
import { Outro } from './Outro'
import { What } from './What'
import { Who } from './Who'

export interface HomePageProps {
  data: HomePagePayload | null
  navbarData: NavigationPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, navbarData }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    overview = [],
    showcaseProjects = [],
    hero,
    who,
    what,
    how,
    outroSection,
    title = '',
  } = data ?? {}

  console.log('data', data)

  return (
    <div>
      {/* Hero */}
      {hero && <Hero data={hero} navbarData={navbarData} />}
      {who && <Who data={who} />}
      {what && <What data={what} />}
      {how && <How data={how} />}
      {outroSection && <Outro data={outroSection} />}
      {/* Overview */}
      {/* Showcase projects */}
      {/*{showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project?._type, project?.slug)
            if (!href) {
              return null
            }
            return (
              <Link
                key={key}
                href={href}
                data-sanity={encodeDataAttribute?.([
                  'showcaseProjects',
                  key,
                  'slug',
                ])}
              >
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}*/}
    </div>
  )
}

export default HomePage
