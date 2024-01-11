import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
function EventListDemo({ events }) {
  if (!events || !Array.isArray(events) || events.length === 0) {
    return null; // Handle the case where events are undefined, not an array, or empty
  }
  return (
    <div className=" md:col-start-4 md:col-end-12 ">
      {events.map((event) => (
        <div className=" " key={event._key}>
          <div className="customGrid6 relative md:customGrid12 text-black md:px-0 border-b-2 border-black md:min-h-[450px] ">
            <div className="pr-4 pt-8 px-4  pb-12 col-start-1 col-end-2 md:col-end-4 md:pl-8 md:pt-8 md:pr-4 md:pb-4 md:flex  ">
              <div className="m-date break-all md:pr-1">{event.hourStart}</div>
              {event.hourFinish && (
                <div className="m-date flex md:gap-1">
                  {" "}
                  <div className="m-date md:block hidden "> → </div>{" "}
                  {event.hourFinish}
                </div>
              )}
            </div>
            <div className="col-start-2 md:col-start-4 col-end-6 md:col-end-12  pl-4 gap-4 pt-6 md:pt-6 pb-6 flex flex-col items-start md:min-h-48">
              <div className=" m-text-agenda"> {event.nameOfEvent}</div>
              <div className="m-job">{event.subText}</div>
            </div>
            <div className="blockLine absolute r w-full    border-black "></div>
            {event.image && (
              <div className="md:col-start-1 md:col-end-13 md:w-[97%] col-start-1 col-end-7">
                <Image
                  priority
                  className="md:h-full md:w-full"
                  src={urlForImage(event.image.asset)}
                  alt="me"
                  height={1800}
                  width={1800}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventListDemo;
