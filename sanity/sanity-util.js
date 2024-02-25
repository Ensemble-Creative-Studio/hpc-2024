import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

export async function getMenu() {
  return client.fetch(groq`
    *[_type == 'settings']{
   ...,
    }
  `);
}
export async function getPoster() {
  return client.fetch(groq`
   *[_type == 'poster'] | order(lower(name) asc) {
      ..., // Include other properties you need
      "posters": posters[] {
        ..., // Include other properties you need for each poster
        "FileUrl": File.asset->url // This part will resolve the URL if file info is available
      }
    }
  `);
}
export async function getProgramme() {
  const programmeData = await client.fetch(groq`
    *[_type == 'programme']
    | order(_createdAt asc)
    {
      ...,
      events[]{
        ...,
        speakers[]->{
          // Specify the fields you want to retrieve from the referenced speaker documents
          // For example:
          name,
          job,
          company,
          image
          // Add other fields you need
        }
      }
    }
  `);

  return programmeData;
}
export async function getDemoLab() {
  const demoLabData = await client.fetch(groq`
    *[_type == 'demolab']
    | order(_createdAt asc)
    {
      ...,

    }
  `);

  return demoLabData;
}
export async function getInfos() {
  const demoLabData = await client.fetch(groq`
    *[_type == 'informations']
    | order(_createdAt asc)
    {
      ...,

    }
  `);

  return demoLabData;
}


// export async function getTagProduce() {
//   return client.fetch(groq`*[_type == 'tagProduce']|order(orderRank)`);
// }
// export async function getProjectsProduce() {
//   return client.fetch(groq`
//   *[_type == 'produceProjects']{
//     ...,
//       "tags": tags[]->,
//       "firstImage": imagesGallery[0].asset->{
       
      
//         metadata
//     },
//   }|order(orderRank)
// `);}
// export async function getTagPresent() {
//   return client.fetch(groq`*[_type == 'tagPresent']|order(orderRank)`);
// }
// export async function getIntro() {
//   return client.fetch(groq`*[_type == 'animation']|order(orderRank)`);
// }
// export async function getProjectsPresent() {
//   return client.fetch(groq`
//   *[_type == 'presentProjects']{
//     ...,
//       "tags": tags[]->,
//       "firstImage": imagesGalleryBooks[0].asset->{
       
      
//         metadata
//     },
//   }|order(orderRank)
// `);}
// export async function getProjectsPresentSlug() {
//   return client.fetch(groq`
//   *[_type == 'presentProjects']{
//     slug,

//   }|order(orderRank)
// `);}
// export async function getInfos() {
//   return client.fetch(groq`*[_type == 'infos']`, { cache: 'no-store' });
// }




// export async function getProjectBySlug(slug) {

//   return client.fetch(groq`
//     *[_type == 'produceProjects' && slug.current == $slug]{
//       ...,
//       "tags": tags[]->,
    
//     }`, 
//     { slug }  // Passing the slug as a parameter to the query
//   );
// }
// export async function getProjectPresentBySlug(slug) {

//   return client.fetch(groq`
//     *[_type == 'presentProjects' && slug.current == $slug]{
//       ...,
//       "tags": tags[]->,
    
//     }`, 
//     { slug }  // Passing the slug as a parameter to the query
//   );
// }



