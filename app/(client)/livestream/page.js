import Header from "../../components/home/Header";
import ProgrammeItem from "@/app/components/programme/ProgrammeItem";
import DemoLabItem from "@/app/components/demoLab/DemoLabItem";
import EventListDemo from "@/app/components/demoLab/EventListDemo";
import { getMenu, getDemoLab, getLiveStream } from "../../../sanity/sanity-util";
import { PortableText } from "@portabletext/react";

import PageFooter from "@/app/components/programme/PageFooter";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const demoLabData = await getDemoLab();
  const liveStreamdata = await getLiveStream();
  const menuData = await getMenu();
  console.log(liveStreamdata)
  const daysOfWeek = ['about', 'monday', 'tuesday', 'wednesday', 'thursday']; // Define the days of the week
  const linkRenderer = ({ children, value }) => (
    <a href={value.href} target="_blank" rel="noopener noreferrer" className="m-text-agenda">
      {children}
    </a>
  );

  // Custom component for rendering 'p' tags
  const paragraphRenderer = ({ children }) => {
    // Check if the block contains only an empty text span
    if (children.length === 1 && children[0] === '') {
      return <br />;
    }
    return <p className="m-text-agenda">{children}</p>;
  };


  const ImageComponent = ({ value }) => {
    if (!value?.asset) {
      return null;
    }

    // Extract the image ID from the asset reference
    const imageId = value.asset._ref; // Adjust according to your asset reference format

    return (
      <div className="w-full pb-8">
        <Image
          priority
          className="md:h-full md:w-full"
          src={urlForImage({ _id: imageId })}
          alt="Event Image"
          height={1800}
          width={1800}
        />
      </div>

    );
  };

  // Define the components to override
  const components = {
    types: {
      image: ImageComponent, // Define the renderer for 'image' type
    },
    marks: {
      link: linkRenderer,
    },
    block: {
      normal: paragraphRenderer,
    },
  };
  return (
    <>
      <Header page={false} demolab={false} />
      <main className="demo-lab livestream flex flex-col md:block justify-between   ">
        <div>

          <div
            className="block md:customGrid12"

          >
            {/* Render other properties using ProgrammeItem component */}
            <div className="sticky z-30 top-16 md:col-start-1 md:col-end-4  md:border-r-2 md:border-black">
              <div className="back-red md:sticky md:top-24 md:h-full md:border-b-2 md:border-black"
              >
                <div className="customGrid6 md:flex md:outline-2 md:outline md:outline-black md:flex-col md:justify-between  h-16 md:h-full sticky top-0 border-b-2 border-black md:border-none text-white px-4 md:px-12 md:py-5">
                  <div className="flex items-center md:items-baseline md:justify-between">
                    <div className="flex md:items-baseline md:gap-4">
                      <div className="prog-u block  infoTitle"> {liveStreamdata[0].title}</div>
                    </div>

                  </div>



                </div>
              </div>

            </div>
            <div className=" md:col-start-4 md:col-end-12 ">

              <div className=" " >
                <div className="customGrid6 relative md:customGrid12 text-black md:px-0 border-b-2 border-black  ">
                  <div className="pr-4 pt-8 px-4  pb-12 col-start-1 col-end-2 md:col-end-4 md:pl-8 md:pt-8 md:pr-4 md:pb-4 md:flex  ">
                    <div className="m-date break-all md:block hidden md:pr-1">{liveStreamdata[0].liveStreamTitle}</div>

                  </div>
                  <div className="col-start-2 md:col-start-4 col-end-6 md:col-end-12  pl-4 gap-4 pt-6 md:pt-6 pb-6 flex portableLive flex-col items-start md:min-h-48">
                    <PortableText value={liveStreamdata[0].text} components={components} />

                  </div>
                  <div className="blockLine absolute r w-full    border-black "></div>

                </div>
              </div>

            </div>
            {/* Render events using EventList component */}
            {/* <EventListDemo events={item.events} /> */}
          </div>
          <div
            className="block md:customGrid12 "

          >
            {/* Render other properties using ProgrammeItem component */}
            <div className="sticky z-30 top-16 md:col-start-1 md:col-end-4  md:border-r-2 md:border-black">
              <div className="back-red md:sticky md:top-24 md:h-48 md:border-b-2 md:border-black"
              >
                <div className="customGrid6 md:flex md:outline-2 md:outline md:outline-black md:flex-col md:justify-between  h-16 md:h-full sticky top-0 border-b-2 border-black md:border-none text-white px-4 md:px-12 md:py-5">
                  <div className="flex  col-end-3 col-start-1 items-center md:items-baseline md:justify-between">
                    <div className="flex md:items-baseline md:gap-4">
                      <div className="prog-u block  infoTitle"> {liveStreamdata[0].liveStreamBlock}</div>
                    </div>

                  </div>



                </div>
              </div>

            </div>
                        <div className=" md:col-start-4 md:col-end-12 ">

                     
                          <iframe className="aspect-video md:w-[97%]" src="https://www.videliostreaming.com/Paris1/HPC/2024-03-19_2/index_iframe.php?
            video=1" width="100%" height='100%' scrolling="no" allowfullscreen="" frameborder="0"></iframe>
                          <script type="text/javascript"
                            src="https://www.videliostreaming.com/communs/javascript/iframeResizer.min.js"></script>
            
                          
                        </div>
          </div>
        </div>
        <div>
        <PageFooter menuData={menuData} />
        </div>

      </main>
    </>
  );
}
