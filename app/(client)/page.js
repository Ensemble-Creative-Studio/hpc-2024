import Image from "next/image";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Menu from "../components/home/Menu";
import Footer from "../components/home/Footer";
import { getMenu } from "../../sanity/sanity-util";
// export const dynamic = "force-dynamic";
export default async function Home() {
  const menuData = await getMenu();
  return (
    <>
      <Header />
      <main className="md:customGrid12 md:customHeight">
        <Hero />
        <div className="px-4  pt-4 pb-8 md:px-12 md:py-8 md:border-r-2 border-black md:flex md:justify-between md:flex-col back-blue md:col-start-1 md:col-end-4 md:row-start-1 md:border-b-2 border-black ">
        <Menu menuData={menuData[0].menu} />
        <Footer menuData={menuData[0].footer} />
        </div>
     
      </main>
    </>
  );
}
