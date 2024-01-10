import Image from "next/image";
import Header from "../../components/home/Header";

import Hero from "../../components/home/Hero";
import Menu from "../../components/home/Menu";
import Footer from "../../components/home/Footer";
import ProgrammeItem from "@/app/components/programme/ProgrammeItem";
import EventList from "@/app/components/programme/EventList";
import { getMenu, getProgramme } from "../../../sanity/sanity-util";

import PageFooter from "@/app/components/programme/PageFooter";
export const dynamic = "force-dynamic";
export default async function Home() {

  const programmeData = await getProgramme  ();
  const menuData = await getMenu();
  // console.log(programmeData[1].events[0].speakers)
  return (
    <>
      <Header page={true} />
      <main className="">
        <div>
          {programmeData.map((item) => (
        <div className="block md:customGrid12 " key={item._id}>
        {/* Render other properties using ProgrammeItem component */}
        <ProgrammeItem
          key={item._id}
          item={item}
          className="back-blue md:sticky md:top-24 md:h-48 md:border-b-2 md:border-black " // Pass your desired class name here
          />

        {/* Render events using EventList component */}
        <EventList events={item.events} />
      </div>
          ))}
        </div>
        <PageFooter menuData={menuData}/>
      </main>
    </>
  );
}
