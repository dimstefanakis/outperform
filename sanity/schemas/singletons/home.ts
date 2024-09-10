import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Title for the hero section',
        }),
        defineField({
          name: 'overview',
          description:
            'Used both for the <meta> description tag for SEO, and the personal website subheader.',
          title: 'Description',
          type: 'array',
          of: [
            // Paragraphs
            defineArrayMember({
              lists: [],
              marks: {
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'Link',
                    fields: [
                      {
                        name: 'href',
                        type: 'url',
                        title: 'Url',
                      },
                    ],
                  },
                ],
                decorators: [
                  {
                    title: 'Italic',
                    value: 'em',
                  },
                  {
                    title: 'Strong',
                    value: 'strong',
                  },
                ],
              },
              styles: [],
              type: 'block',
            }),
          ],
          validation: (rule) => rule.max(155).required(),
        }),
        defineField({
          name: 'background',
          title: 'Background',
          type: 'image',
          description: 'Background image for the hero section',
        }),
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'image',
          description: 'Upload your website logo here',
        }),
        // defineField({
        //   name: 'navButtons',
        //   title: 'Navigation Buttons',
        //   type: 'array',
        //   of: [
        //     defineArrayMember({
        //       type: 'object',
        //       fields: [
        //         {
        //           name: 'label',
        //           type: 'string',
        //           title: 'Button Label',
        //         },
        //         {
        //           name: 'link',
        //           type: 'string',
        //           title: 'Button Link',
        //         },
        //       ],
        //     }),
        //   ],
        //   description: 'Add navigation buttons (e.g., Who, What, Why)',
        // }),
        defineField({
          name: 'contactCTA',
          title: 'Contact CTA',
          type: 'object',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'CTA Text',
              description: 'e.g., "Drop a line"',
            },
            {
              name: 'icon',
              type: 'image',
              title: 'CTA Icon',
            },
            {
              name: 'link',
              type: 'string',
              title: 'CTA Link',
            },
          ],
          description: 'Add a "Drop a line" CTA with text and icon',
        }),
      ],
    }),
    defineField({
      name: 'who',
      title: 'Who',
      description:
        'This section is the "Who" section of your personal website. It should contain information about you.',
      type: 'reference',
      to: [{ type: 'who' }],
    }),
    defineField({
      name: 'what',
      title: 'What',
      description:
        'This section is the "What" section of your personal website. It should contain information about what you do.',
      type: 'reference',
      to: [{ type: 'what' }],
    }),
    defineField({
      name: 'how',
      title: 'How',
      description:
        'This section is the "How" section of your personal website. It should contain information about how you work.',
      type: 'reference',
      to: [{ type: 'how' }],
    }),
    defineField({
      name: 'outroSection',
      title: 'Outro Section',
      description: 'This section is the outro section of your website.',
      type: 'reference',
      to: [{ type: 'outroSection' }],
    }),
    defineField({
      name: 'showcaseProjects',
      title: 'Showcase projects',
      description:
        'These are the projects that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
