export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Tittel',
        type: 'string',
        validation: Rule => Rule.required().min(3).max(50)
      },
      {
        name: 'image',
        title: 'Bilde',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'pokemon',
        title: 'Pokemon',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'pokemon' } }],
        validation: Rule => Rule.required().min(3).max(9)
      },
    ],
  };
  