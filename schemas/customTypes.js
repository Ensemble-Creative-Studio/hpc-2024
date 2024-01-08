export const externalLink = {
    name: "externalLink",
    type: "object",
    title: "External Link",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Name of Link",
      },
      {
        name: "url",
        type: "url",
        title: "URL",
      },
    ],
  };
  
  export const internalLink = {
    name: "internalLink",
    type: "object",
    title: "Internal Link",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Name of Link",
      },
      {
        name: "document",
        type: "reference",
        title: "Document",
        to: [{ type: "yourDocumentType" }], // Replace "yourDocumentType" with the actual document type you want to reference.
      },
    ],
  };
  
  export const footerItem = {
    name: "footerItem",
    type: "object",
    title: "Footer Item",
    fields: [
      {
        name: "icon",
        type: "image",
        title: "Icon",
      },
      {
        name: "name",
        type: "string",
        title: "Name of Link",
      },
      {
        name: "url",
        type: "url",
        title: "URL",
      },
    ],
  };
  