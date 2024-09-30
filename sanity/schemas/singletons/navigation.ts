import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This is for internal reference only',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Upload your website logo here',
    }),
    defineField({
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contactCTA',
      title: 'Contact CTA',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          type: 'string',
          title: 'CTA Text',
          description: 'e.g., "Drop us a line"',
        }),
        defineField({
          name: 'icon',
          type: 'image',
          title: 'CTA Icon',
        }),
        defineField({
          name: 'link',
          type: 'string',
          title: 'CTA Link',
        }),
      ],
      description: 'Add a "Drop a line" CTA with text and icon',
    }),
    defineField({
      name: 'auditCTA',
      title: 'Audit CTA',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          type: 'string',
          title: 'CTA Text',
        }),
        defineField({
          name: 'icon',
          type: 'image',
          title: 'CTA Icon',
        })
      ],
    }),
  ],
})
