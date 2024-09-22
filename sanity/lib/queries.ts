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
        imagePosition,
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
          rowSpan,
          carousel[]{
            title,
            description
          }
        }
      }
    },
    how->{
      header,
      title,
      description,
      reporting{
        title,
        icon{
          asset->{
            url,
            metadata {
              dimensions
            }
          }
        },
        reporting_items[]{
          image{
            asset->{
              url,
              metadata {
                dimensions
              }
            }
          },
          title,
          description,
          icon{
            asset->{
              url,
              metadata {
                dimensions
              }
            }
          }
        }
      },
      consulting{
        title,
        icon{
          asset->{
            url,
            metadata {
              dimensions
            }
          }
        },
        consulting_items[]{
          image{
            asset->{
              url,
              metadata {
                dimensions
              }
            }
          },
          title,
          description,
          icon{
            asset->{
              url,
              metadata {
                dimensions
              }
            }
          }
        }
      },
      ads{
        title,
        icon{
          asset->{
            url,
            metadata {
              dimensions
            }
          }
        },
        ad_items[]{
          image{
            asset->{
              url,
              metadata {
                dimensions
              }
            }
          },
          title
        }
      }
    },
    outroSection->{
      title,
      cta_text,
      cta_link,
      cta_icon {
        asset-> {
          url,
          metadata {
            dimensions
          }
        }
      },
      partners_image {
        asset-> {
          url,
          metadata {
            dimensions
          }
        }
      },
      brand_images[] {
        asset-> {
          url,
          metadata {
            dimensions
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

export const outroSectionQuery = groq`
  *[_type == "outroSection"][0] {
    title,
    cta_text,
    cta_icon {
      asset-> {
        url,
        metadata {
          dimensions
        }
      }
    },
    partners_image {
      asset-> {
        url,
        metadata {
          dimensions
        }
      }
    },
    brand_images[] {
      asset-> {
        url,
        metadata {
          dimensions
        }
      }
    }
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

export const globalFooterQuery = groq`
  *[_type == "footer"][0] {
    leftItems[] {
      text,
      url
    },
    rightItems[] {
      text,
      url,
      logo {
        asset-> {
          url,
          metadata {
            dimensions
          }
        }
      }
    }
  }
`
