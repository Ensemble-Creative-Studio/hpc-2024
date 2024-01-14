import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default {
  type: "document",
  name: "informations",
  title: "Practical Informations",
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
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    },
 
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
};
