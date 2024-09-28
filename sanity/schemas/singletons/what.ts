import { defineArrayMember,defineField, defineType } from 'sanity'

export default defineType({
  name: 'what',
  title: 'What',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title for the What section',
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: 'The header text for the What section',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed description of the What section',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      description: 'The background color for the What section',
    }),
    defineField({
      name: 'clients',
      title: 'Clients',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'client',
          fields: [
            defineField({
              name: 'clientName',
              title: 'Client Name',
              type: 'string',
            }),
            defineField({
              name: 'clientImage',
              title: 'Client Image',
              type: 'image',
            }),
          ],
        }),
      ],
      description: 'An array of clients, each with a name and multiple images',
    }),
    defineField({
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'caseStudy',
          fields: [
            defineField({
              name: 'clientImage',
              title: 'Client Image',
              type: 'image',
            }),
            defineField({
              name: 'imagePosition',
              title: 'Image Position',
              type: 'string',
              options: {
                list: [
                  { title: 'Left', value: 'left' },
                  { title: 'Right', value: 'right' },
                ],
              },
            }),
            defineField({
              name: 'studyTitle',
              title: 'Study Title',
              type: 'text',
            }),
            defineField({
              name: 'studyDescription',
              title: 'Study Description',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
            defineField({
              name: 'studyPillars',
              title: 'Study Pillars',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'studyPillar',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'text',
                    }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                    }),
                    defineField({
                      name: 'columnSpan',
                      title: 'Column Span',
                      type: 'number',
                      validation: (Rule) => Rule.min(1).max(2),
                    }),
                    defineField({
                      name: 'rowSpan',
                      title: 'Row Span',
                      type: 'number',
                      validation: (Rule) => Rule.min(1).max(2),
                    }),
                    defineField({
                      name: 'carousel',
                      title: 'Carousel',
                      type: 'array',
                      of: [
                        defineArrayMember({
                          type: 'object',
                          name: 'carouselItem',
                          fields: [
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
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
      description: 'An array of case studies with detailed information',
    }),
  ],
})
