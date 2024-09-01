import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    title,
    hero {
      title,
      overview,
      background {
        asset->{
          url,
          metadata {
            dimensions,
          },
          _ref
        }
      },
      logo {
        asset->{
          url,
          metadata {
            dimensions
          }
        }
      }
    },
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    who->{
      header,
      title,
      description,
      circles[]{
        title,
        description,
        subTitle,
        outsideDescription[]
      },
      footerHeader,
      footerDescription
    },
    what->{
      title,
      header,
      description,
      backgroundColor,
      clients[]{
        clientName,
        clientImages[]{
          asset->{
            url,
            metadata {
              dimensions
            }
          }
        }
      },
      caseStudies[]{
        clientImage{
          asset->{
            url,
            metadata {
              dimensions
            }
          }
        },
        studyTitle,
        studyDescription,
        image{
          asset->{
            url,
            metadata {
              dimensions
            }
          }
        },
        studyPillars[]{
          title,
          description,
          columnSpan,
          carousel[]{
            title,
            description
          }
        }
      }
    }
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`

export const globalNavigationQuery = groq`
  *[_type == "navigation"][0]{
    title,
    logo{
      asset->{
        url,
        metadata {
          dimensions
        }
      }
    },
    navItems[]{
      label,
      link
    },
    contactCTA{
      text,
      icon{
        asset->{
          url,
          metadata {
            dimensions
          }
        }
      },
      link
    }
  }
`
