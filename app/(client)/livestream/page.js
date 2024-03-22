import Header from "../../components/home/Header";
import ProgrammeItemLiveStream from "@/app/components/programme/ProgrammeItemLivestream";
import DemoLabItem from "@/app/components/demoLab/DemoLabItem";

import EventListLiveStream from "@/app/components/programme/EventListLiveStream";
import { getMenu, getDemoLab, getLiveStream } from "../../../sanity/sanity-util";
import { PortableText } from "@portabletext/react";

import PageFooter from "@/app/components/programme/PageFooter";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const demoLabData = await getDemoLab();
  const liveStreamdata = await getLiveStream();
  const menuData = await getMenu();
  // console.log(liveStreamdata[0].events)
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




  // Define the components to override
  const components = {

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
      <main className="demo-lab livestream flex flex-col md:flex justify-between  ">
        <div>

  
          <div>
            {liveStreamdata[0].events.map((item, index) => (
              <div
                className="block md:customGrid12"
                key={index} // Add a unique key prop, assuming `_id` is unique
              >
                {/* Render other properties using ProgrammeItem component */}
                <ProgrammeItemLiveStream
                  item={item}
                  className="back-red md:sticky md:top-24 md:h-48 md:border-b-2 md:border-black"
                // Pass your desired class name here
                />

                {/* Render events using EventList component */}
                <EventListLiveStream events={item.event} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <PageFooter menuData={menuData} />
        </div>

      </main>
    </>
  );
}
