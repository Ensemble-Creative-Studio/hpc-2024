import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default {
  type: "document",
  name: "programme",
  title: "programme",
  orderings: [
    {
      title: "Title",
      name: "title",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  fields: [
    
    {
      name: "title",
      type: "string",
      title: "title",
    },
    {
      name: 'day',
      title: 'Day',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date of Event',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
      {
        name: 'hourStart',
        title: 'Hour Start',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'hourFinish',
        title: 'Hour Finish',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
    {
      name: 'nameOfEvent',
      title: 'Name of Day Event',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'normalEvent',
          title: 'Logistical Event',
          fields: [
            {
              name: 'nameOfEvent',
              title: 'Name of Event',
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
          
          ],
        },
        {
          type: 'object',
          name: 'meetingEvent',
          title: 'Meeting Event',
          fields: [
            {
              name: 'nameOfEvent',
              title: 'Name of Event',
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
              name: 'File',
              title: 'Presentation File',
              type: 'file',
            },
            {
              name: 'speakers',
              title: 'Speakers',
              type: 'array',
              of: [{ type: 'reference', to: [{ type: 'speakers' }] }],
            },
          ],
        },
        {
          type: 'object',
          name: 'parallelEvent',
          title: 'Parallel Event',
          fields: [
            {
              name: 'nameOfEvent',
              title: 'Name of Event',
              type: 'string',
            },
            {
              name: 'subNameOfEvent',
              title: 'Sub title of Event',
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
              name: 'File',
              title: 'Presentation File',
              type: 'file',
            },
            {
              name: 'speakers',
              title: 'Speakers',
              type: 'array',
              of: [{ type: 'reference', to: [{ type: 'speakers' }] }],
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
