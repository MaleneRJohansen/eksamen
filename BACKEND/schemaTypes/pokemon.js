export default {
    name: 'pokemon',
    title: 'Pokemon',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required().min(3).max(12)
      },
      {
        name: 'types',
        title: 'Types',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        },
        validation: Rule => Rule.required().min(1).max(2)
      },
      {
        name: 'image',
        title: 'Bilde',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }
  