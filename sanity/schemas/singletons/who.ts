import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'who',
  title: 'Who',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
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
      name: 'circles',
      title: 'Circles',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'subTitle',
              title: 'Sub Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description (Optional)',
              type: 'text',
            }),
            defineField({
              name: 'outsideDescription',
              title: 'Outside Description (Optional)',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'block',
                  styles: [],
                  lists: [],
                  marks: {
                    decorators: [],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          defineField({
                            name: 'href',
                            type: 'url',
                            title: 'URL',
                          }),
                        ],
                      },
                    ],
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'footerHeader',
      title: 'Footer Header',
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
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
    }),
  ],
})
