"use client";
import Header from "../../components/home/Header";
import { useEffect } from "react";
import { getMenu, getPoster } from "../../../sanity/sanity-util";

import PageFooter from "@/app/components/programme/PageFooter";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const posterData = await getPoster();
  const menuData = await getMenu();

  // Sort posters alphabetically by nameOfPoster
  posterData[0].posters.sort((a, b) =>
    a.nameOfPoster.localeCompare(b.nameOfPoster)
  );

  // console.log(posterData[0].posters[1]);

  // Function to generate anchor IDs based on the starting letter of poster names
  const generateAnchorId = (name) => {
    return name.charAt(0).toLowerCase();
  };

  // Create an object to store whether an ID has been assigned to a particular letter
  const assignedIds = {};

  return (
    <>
      <Header page={false} demolab={false} />
      <main className="poster">
        <div className="block md:customGrid12">
          <div className="sticky md:h-[60px] first-letter: z-30 md:top-24 md:col-start-1 md:col-end-4  md:border-r-2 b back-blue md:border-b md:border-black md:border-black">
            {/* Navigation bar for scrolling */}
          </div>
          <div className="flex items-center   sticky md:h-[60px] h-[40px] pl-[9px] gap-6 overflow-auto flex-nowrap hideScroll  md:border-solid z-30 md:pl-5 md:gap-7 md:top-24 top-16 justify-start text-white back-blue md:col-start-4 md:col-end-13">
            {/* Map through the posters to generate anchor IDs */}
            {posterData[0].posters.map((poster) => {
              const anchorId = generateAnchorId(poster.nameOfPoster);
              // If the ID hasn't been assigned yet, assign it and render the link
              if (!assignedIds[anchorId]) {
                assignedIds[anchorId] = true;
                return (
                  <a
                    key={anchorId}
                    href={`#${anchorId}`}
                    className=" m-mini-time px-2"
                  >
                    {anchorId.toUpperCase()}
                  </a>
                );
              }
              return null; // Return null if the ID has already been assigned
            })}
          </div>

          <div className="sticky z-30 top-16 md:col-start-1 md:col-end-4  md:border-r-2 md:border-black">
            {/* Navigation bar for scrolling */}
          </div>
          <div className="md:col-start-4 md:col-end-12 relative ">
            {posterData[0].posters.map((poster) => {
              const anchorId = generateAnchorId(poster.nameOfPoster);
              return (
                <div key={poster._key} id={anchorId} className=" ">
                  <div className="customGrid6 relative group hover:bg-[#E7E7E7] transition300  md:customGrid12 text-black md:px-0 border-b-2  border-black md:min-h-48 ">
                  <div className="absolute md:block group-hover:bg-[#0929d4]  hidden h-[102%] w-[38%]  -left-[38%] -top-[0.3px] transition300 md:border-b-2 md:border-black">
            {/* Navigation bar for scrolling */}
          </div>
                    <div className="pr-4 pt-4 px-4  col-start-1 col-end-5 md:col-end-7 md:pl-8 md:pt-8 md:pr-4 md:pb-4  md:flex flex-col gap-[4px] ">
                      <div className=" m-text-agenda pb-3 md:pb-0">
                        {" "}
                        {poster.nameOfPoster}
                      </div>
                      <div className="m-job lightBlue">{poster.subTitle}</div>

                        <a
                          href={poster.FileUrl}
                          download
                          className="flex md:hidden gap-[10px] pt-[2.5rem] pb-4  top-0 left-0  relative md:justify-end md:pr-5 "
                        >
                          <div className="uppercase m-mini-time">Download</div>
                          <div className="m-mini-time">↓</div>
                        </a>
                      
                    </div>
                    <div className="blockLinePoster absolute r w-full  group-hover:bg-[#E7E7E7] transition300    border-black ">
                      {poster.FileUrl && (
                        <a
                          href={poster.FileUrl}
                          download
                          className="md:flex hidden gap-[10px] md:pt-[2.3rem]  top-0 left-0  relative md:justify-end md:pr-5 "
                        >
                          <div className="uppercase m-mini-time">Download</div>
                          <div className="m-mini-time">↓</div>
                        </a>
                      )}
                    </div>
                  </div>

         
                </div>
              );
            })}
          </div>
        </div>
        <PageFooter menuData={menuData} />
      </main>
    </>
  );
}
