export default {
    name: "poster",
    type: "document",
    title: "Posters",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Title",
          },
          {
            name: 'posters',
            title: 'Posters',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'nameOfPoster',
                    title: 'Name of poster',
                    type: 'string',
                  },
                  {
                    name: 'subTitle',
                    title: 'Sub Title',
                    type: 'string',
                  },
                  {
                    name: 'File',
                    title: 'Poster File',
                    type: 'file',
                  },
                 
                ],
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
  