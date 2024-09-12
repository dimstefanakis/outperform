import { defineArrayMember,defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'leftItems',
      title: 'Items on the Left',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'leftLink',
          fields: [
            defineField({
              name: 'text',
              title: 'Link Text',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
        }),
      ],
      description: 'Links to be displayed on the left side of the footer',
    }),
    defineField({
      name: 'rightItems',
      title: 'Items on the Right',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'rightLink',
          fields: [
            defineField({
              name: 'text',
              title: 'Link Text',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
      description:
        'Links with logos to be displayed on the right side of the footer',
    }),
  ],
})
