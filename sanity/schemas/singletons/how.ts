import { defineArrayMember,defineField, defineType } from 'sanity'

export default defineType({
  name: 'how',
  title: 'How',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: 'The header text for the How section',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title for the How section',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed description of the How section',
    }),
    defineField({
      name: 'reporting',
      title: 'Reporting',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'icon',
          title: 'Icon',
          type: 'image',
        }),
        defineField({
          name: 'reporting_items',
          title: 'Reporting Items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'reportingItem',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'consulting',
      title: 'Consulting',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'icon',
          title: 'Icon',
          type: 'image',
        }),
        defineField({
          name: 'consulting_items',
          title: 'Consulting Items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'consultingItem',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'ads',
      title: 'Ads',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'icon',
          title: 'Icon',
          type: 'image',
        }),
        defineField({
          name: 'ad_items',
          title: 'Ad Items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'adItem',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
