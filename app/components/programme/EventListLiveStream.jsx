import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
function EventListLiveStream({ events }) {
  console.log(events)
  return (
    <div className=" md:col-start-4 md:col-end-12 ">
      {events.map((event) => (
        <div className=" " key={event._key}>



          <div className="relative">
            <div className={`customGrid6 relative md:customGrid12 lightBlue px-4 md:px-0 bg-white border-b-2 border-black md:min-h-48`}>
              <div className="pr-4 pt-8 pb-12 col-start-1 col-end-6 md:col-end-9 md:pl-8 md:pt-8 md:pr-4 md:pb-4 md:flex  ">
                <div className=" m-text-agenda"> {event.name}</div>

              </div>


              <div className="blockLine absolute r w-full    border-black "></div>

            </div>
        

          </div>

          <div className="  ">


            <iframe className="aspect-video md:w-[97%]" src={event.url} width="100%" height='100%' ></iframe>



          </div>
        </div>

      ))}
    </div>
  );
}

export default EventListLiveStream;
