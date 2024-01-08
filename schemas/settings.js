export default {
    name: "settings",
    type: "document",
    title: "Settings",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Title",
          },
      {
        
        name: "menu",
        title: "Menu",
        type: "array",
        of: [
          {
            type: "externalLink",
          },
          {
            type: "internalLink",
          },
        ],
      },
      {
        name: "footer",
        title: "Footer",
        type: "array",
        of: [
          {
            type: "footerItem",
          },
        ],
      },
    ],
  };
  
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
        name: "subName",
        type: "string",
        title: "Sub text",
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
        name: "subName",
        type: "string",
        title: "Sub text",
      },
      {
        name: "url",
        type: "string",
        title: "URL",
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
  