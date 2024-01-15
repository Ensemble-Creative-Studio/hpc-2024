import Header from "../../components/home/Header";
import ProgrammeItem from "@/app/components/programme/ProgrammeItem";
import DemoLabItem from "@/app/components/demoLab/DemoLabItem";
import EventListDemo from "@/app/components/demoLab/EventListDemo";
import { getMenu, getDemoLab } from "../../../sanity/sanity-util";

import PageFooter from "@/app/components/programme/PageFooter";

export const dynamic = "force-dynamic";

export default async function Home() {
  const demoLabData = await getDemoLab();
  const menuData = await getMenu();

  const daysOfWeek = ['about', 'monday', 'tuesday', 'wednesday', 'thursday']; // Define the days of the week
console.log(demoLabData)
  return (
    <>
      <Header page={true} demolab={true} />
      <main className="demo-lab">
        <div>
          {demoLabData.map((item, index) => (
            <div
              className="block md:customGrid12"
              key={item._id}
              id={daysOfWeek[index]} // Assign the day's name as the id
            >
              {/* Render other properties using ProgrammeItem component */}
              <DemoLabItem
                key={item._id}
                item={item}
                className="back-red md:sticky md:top-24 md:h-48 md:border-b-2 md:border-black"
                // Pass your desired class name here
              />

              {/* Render events using EventList component */}
              <EventListDemo events={item.events} />
            </div>
          ))}
        </div>
        <PageFooter menuData={menuData} />
      </main>
    </>
  );
}
