'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/page.tsx` route
 */

import { colorInput } from '@sanity/color-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import * as resolve from '@/sanity/plugins/resolve'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
import page from '@/sanity/schemas/documents/page'
import project from '@/sanity/schemas/documents/project'
import duration from '@/sanity/schemas/objects/duration'
import milestone from '@/sanity/schemas/objects/milestone'
import timeline from '@/sanity/schemas/objects/timeline'
import footer from '@/sanity/schemas/singletons/footer'
import home from '@/sanity/schemas/singletons/home'
import how from '@/sanity/schemas/singletons/how'
import navigation from '@/sanity/schemas/singletons/navigation'
import outro from '@/sanity/schemas/singletons/outro'
import settings from '@/sanity/schemas/singletons/settings'
import what from '@/sanity/schemas/singletons/what'
import who from '@/sanity/schemas/singletons/who'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Outperform Sanity.io'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      navigation,
      footer,
      who,
      what,
      how,
      outro,
      // Documents
      duration,
      page,
      project,
      // Objects
      milestone,
      timeline,
    ],
  },
  plugins: [
    structureTool({
      structure: pageStructure([
        home,
        settings,
        navigation,
        footer,
        who,
        what,
        how,
        outro,
      ]),
    }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([
      home.name,
      settings.name,
      navigation.name,
      footer.name,
      who.name,
      what.name,
      how.name,
      outro.name,
    ]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    colorInput(),
  ],
})
