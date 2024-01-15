import React from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
function ProgrammeItem({ item, className }) {
  return (
    <div className="sticky z-30 top-16 md:col-start-1 md:col-end-4  md:border-r-2 md:border-black">
      <div className={className}>
        <div className="customGrid6 md:flex  md:outline-2 md:outline md:outline-black md:flex-col md:justify-between  h-16 md:h-full sticky top-0 border-b-2 border-black md:border-none text-white px-4 md:px-12 md:py-5">
          <div className="flex items-center md:items-baseline md:justify-between">
          <div className="flex md:items-baseline md:gap-4">
            <div className="prog-u md:block hidden"> {item.day}</div>
            <div className="m-mini-time flex items-center"> {item.date}</div>
          </div>
          <div className="col-start-2 col-end-6 md:flex items-center pl-4 gap-4 hidden ">
            <div className="m-mini-time">
              {item.hourStart} → {item.hourFinish}
            </div>
            <div className="m-mini-time block md:hidden">
              {item.nameOfEvent}
            </div>
          </div>
          </div>
      

          <div className="col-start-2 col-end-6 flex items-center pl-4 gap-4 md:hidden ">
            <div className="m-mini-time">
              {item.hourStart} → {item.hourFinish}
            </div>
            <div className="m-mini-time block md:hidden">
              {item.nameOfEvent}
            </div>
          </div>

          <div className="m-mini-time md:block hidden">{item.nameOfEvent}</div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 md:block hidden h-40 p-6">
      <Image priority className="md:h-full md:w-full" src="/cube.svg" alt="me" height={20} width={20} />

      </div>
    </div>
  );
}

export default ProgrammeItem;
