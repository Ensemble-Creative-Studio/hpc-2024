import Header from "../../components/home/Header";
import InfoListDemo from "@/app/components/informations/InfoListDemo";

import DemoLabItem from "@/app/components/demoLab/DemoLabItem";
// import EventListDemo from "@/app/components/demoLab/EventListDemo";
import { getMenu, getInfos } from "../../../sanity/sanity-util";

import PageFooter from "@/app/components/programme/PageFooter";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const infosData = await getInfos();
  const menuData = await getMenu();
  return (
    <>
      <Header page={false} />
      <main className="demo-lab pratical">
        <div>
          {infosData.map((item, index) => (
            <div
              className="block md:customGrid12"
              key={item._id}
              id={[index]} // Assign the day's name as the id
            >
              {/* Render other properties using ProgrammeItem component */}
              <DemoLabItem
                key={item._id}
                item={item}
                className="back-red md:sticky md:top-24 md:h-48 md:border-b-2 md:border-black"
                // Pass your desired class name here
              />

              {/* Render events using EventList component */}
              <InfoListDemo events={item} />
            </div>
          ))}
        </div>
        <PageFooter menuData={menuData} />
      </main>
    </>
  );
}
