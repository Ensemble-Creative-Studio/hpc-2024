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
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
};
