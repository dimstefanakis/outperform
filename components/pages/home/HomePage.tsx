import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import { Hero } from './Hero'
import { What } from './What'
import { Who } from './Who'
import { How } from './How'
import { Outro } from './Outro'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    overview = [],
    showcaseProjects = [],
    hero,
    who,
    what,
    how,
    outro,
    title = '',
  } = data ?? {}

  console.log('data', data)

  return (
    <div>
      {/* Hero */}
      {hero && <Hero data={hero} />}
      {who && <Who data={who} />}
      {what && <What data={what} />}
      {how && <How data={how} />}
      {outro && <Outro data={outro} />}
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
