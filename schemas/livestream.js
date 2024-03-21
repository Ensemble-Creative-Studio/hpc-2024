import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default {
  type: "document",
  name: "liveStream",
  title: "Live Stream",
  orderings: [orderRankOrdering],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: 'liveStreamTitle',
      title: 'Live stream ',
      type: 'string',
    },
 
    {
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    },
    {
      name: 'liveStreamBlock',
      title: 'Live stream title',
      type: 'string',
    },
    {
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [
  
        {
          type: 'object',
          name: 'meetingEvent',
          title: 'Event',
          fields: [
            {
              name: 'day',
              title: 'Day of event',
              type: 'string',
            },
         
            {
              name: 'event',
              title: 'Event',
              type: 'array',
              of: [
          
                {
                  type: 'object',
                  name: 'item',
                  title: 'Item',
                  fields: [
                    {
                      name: 'name',
                      title: 'Name of event',
                      type: 'string',
                    },
                 
                    {
                      name: 'url',
                      title: 'Video Url',
                      type: 'string',
                    },
                  ],
                },
             
              ],
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
