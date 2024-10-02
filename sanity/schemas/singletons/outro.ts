import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'outroSection',
  title: 'Outro Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title for the Outro Section',
    }),
    defineField({
      name: 'cta_text',
      title: 'CTA Text',
      type: 'string',
      description: 'The text for the call-to-action button',
    }),
    defineField({
      name: 'cta_link',
      title: 'CTA Link',
      type: 'string',
      description: 'The link for the call-to-action button',
    }),
    defineField({
      name: 'cta_icon',
      title: 'CTA Icon',
      type: 'image',
      description: 'The icon for the call-to-action button',
    }),
    defineField({
      name: 'outro_description',
      title: 'Outro Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'color',
                type: 'object',
                title: 'Color',
                fields: [
                  {
                    name: 'hex',
                    type: 'color',
                    title: 'Color',
                  },
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'partners_image',
      title: 'Partners Image',
      type: 'image',
      description: 'The image showcasing partners',
    }),
    defineField({
      name: 'brand_images',
      title: 'Brand Images',
      type: 'array',
      of: [defineArrayMember({ type: 'image' })],
      description: 'An array of brand images',
    }),
  ],
})
