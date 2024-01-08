// schema.js

export default {
    name: 'speakers',
    title: 'Speakers',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'job',
        title: 'Job',
        type: 'string',
      },
      {
        name: 'company',
        title: 'Company',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image (Photo)',
        type: 'image',
        options: {
          hotspot: true, // If you want to enable hotspot functionality for cropping
        },
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  