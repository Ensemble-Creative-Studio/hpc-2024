import Header from "../../components/home/Header";
import ProgrammeItem from "@/app/components/programme/ProgrammeItem";
import EventList from "@/app/components/programme/EventList";
import { getMenu, getProgramme } from "../../../sanity/sanity-util";

import PageFooter from "@/app/components/programme/PageFooter";

export const dynamic = "force-dynamic";

export default async function Home() {
  const programmeData = await getProgramme();
  const menuData = await getMenu();

  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday']; // Define the days of the week

  return (
    <>
      <Header page={true} />
      <main className="">
        <div>
          {programmeData.map((item, index) => (
            <div
              className="block md:customGrid12"
              key={item._id}
              id={daysOfWeek[index]} // Assign the day's name as the id
            >
              {/* Render other properties using ProgrammeItem component */}
              <ProgrammeItem
                key={item._id}
                item={item}
                className="back-blue md:sticky md:top-24 md:h-48 md:border-b-2 md:border-black"
                // Pass your desired class name here
              />

              {/* Render events using EventList component */}
              <EventList events={item.events} />
            </div>
          ))}
        </div>
        <PageFooter menuData={menuData} />
      </main>
    </>
  );
}
