
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { dashboardTool } from "@sanity/dashboard";
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

import { schemaTypes } from "./schemas"
import {apiVersion, dataset, projectId} from './sanity/env'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'


// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["header"])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
            // documentList.defaultOrdering([{field: 'priority', direction: 'desc'}])


            S.documentTypeListItem("programme")
            .title("Programme")
            .child(
              S.documentList()
                .id("programme")
                .title("Programmes")
                .defaultOrdering([{ field: 'date', direction: 'desc' }]) // Order by creation date in ascending order
                .filter('_type == "programme"') // Replace "programme" with your actual schema type name
            ),
                      S.documentTypeListItem("demolab").title("Demo LAB"),
            // S.listItem()
            // .title("Programme")
            // .id("programme")
            // .child(
             
            //   S.document()
            //     .schemaType("programme")
            //     .documentId("programme")
                
            // ),
            // S.divider(),
            //   orderableDocumentListDeskItem({type: 'produceProjects',  title: 'Produce', S, context}),
            //   orderableDocumentListDeskItem({type: 'tagProduce',  title: 'Categories', S, context}),
            //   S.divider(),
            //   orderableDocumentListDeskItem({type: 'presentProjects',  title: 'Present', S, context}),
            //   orderableDocumentListDeskItem({type: 'tagPresent',  title: 'Categories ', S, context}),
            //   S.divider(),
            S.divider(),
            S.documentTypeListItem("speakers").title("Speakers"),

              S.listItem()
              .title("Settings")
              .id("settings")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("settings")
                  .documentId("settings")
              ),
            // Regular document types
            // S.listItem()
            // .title("Footer")
            // .id("footer")
            // .child(
            //   // Instead of rendering a list of documents, we render a single
            //   // document, specifying the `documentId` manually to ensure
            //   // that we're editing the single instance of the document
            //   S.document()
            //     .schemaType("footer")
            //     .documentId("footer")
            // ),
            // S.documentTypeListItem("pageFooter").title("Page légales"),


          ]),
    }),
visionTool(),
    dashboardTool({
      widgets: [
 
      ]
    }),
    vercelDeployTool(),

  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
