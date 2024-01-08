import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default {
  type: "document",
  name: "demolab",
  title: "Demo Lab",
  orderings: [orderRankOrdering],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: 'day',
      title: 'Day',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date of Event',
      type: 'string',
    },
    {
      name: 'hourStart',
      title: 'Hour Start',
      type: 'string',

    },
    {
      name: 'hourFinish',
      title: 'Hour Finish',
      type: 'string',
    },
    {
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'nameOfEvent',
              title: 'Name of Event',
              type: 'string',
            },
            {
              name: 'subText',
              title: 'Text of Event',
              type: 'text',
            },
            {
              name: 'hourStart',
              title: 'Hour Start',
              type: 'string',
            },
            {
              name: 'hourFinish',
              title: 'Hour Finish',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image (Photo)',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
};
