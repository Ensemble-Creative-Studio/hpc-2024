import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
function EventList({ events }) {
  if (!events || !Array.isArray(events) || events.length === 0) {
    return null; // Handle the case where events are undefined, not an array, or empty
  }
  return (
    <div className=" md:col-start-4 md:col-end-12 ">
      {events.map((event) => (
        <div className=" " key={event._key}>
          {event._type === "normalEvent" && (
            <div className="customGrid6 relative md:customGrid12 text-black px-4 md:px-0 back-grey border-b-2 border-black md:min-h-48 ">
              <div className="pr-4 pt-8 pb-12 col-start-1 col-end-2 md:col-end-4 md:pl-8 md:pt-8 md:pr-4 md:pb-4 md:flex  ">
                <div className="m-date break-all md:pr-1">{event.hourStart}</div>
                {event.hourFinish && (
                  <div className="m-date flex md:gap-1">
                    {" "}
                    <div className="m-date md:block hidden "> →  </div>{" "}
                    {event.hourFinish}
                  </div>
                )}
              </div>
              <div className="col-start-2 md:col-start-4 col-end-6 md:col-end-12  pl-4 gap-4 pt-6 md:pt-6 pb-6 flex items-start">
                <div className=" m-text-agenda"> {event.nameOfEvent}</div>
              </div>
              <div className="blockLine absolute r w-full back-grey   border-black "></div>
            </div>
          )}

          {event._type === "meetingEvent" && (
            <div className="relative">
    <div className={`customGrid6 relative md:customGrid12 lightBlue px-4 md:px-0 bg-white border-b-2 border-black md:min-h-48 ${event.speakers && event.speakers.length > 0 ? 'sticky top-32 md:top-24 z-20' : ''}`}>
    <div className="pr-4 pt-8 pb-12 col-start-1 col-end-2 md:col-end-4 md:pl-8 md:pt-8 md:pr-4 md:pb-4 md:flex  ">
                <div className="m-date break-all md:pr-1">{event.hourStart}</div>
                {event.hourFinish && (
                  <div className="m-date flex md:gap-1">
                    {" "}
                    <div className="m-date md:block hidden "> →  </div>{" "}
                    {event.hourFinish}
                  </div>
                )}
              </div>
              <div className="col-start-2 md:col-start-4 col-end-6 md:col-end-12  pl-4 gap-4 pt-6  md:pt-6 pb-6 flex items-start">
                  <div className=" m-text-agenda"> {event.nameOfEvent}</div>
                </div>
                <div className="blockLine absolute r w-full    border-black "></div>

              </div>
              {event.speakers && event.speakers.length > 0 && (
                <div className="">
                  {event.speakers.map((speaker, index) => (
                    <div
                      className="flex md:flex-row-reverse relative customLine justify-between md:justify-end   border-b-2 border-black"
                      key={index}
                    >
                      <div className=" md:left-[26%] md:absolute flex flex-col justify-between md:justify-start p-4 md:pt-6 md:pb-8">
                        <div className="m-speakers">{speaker.name}</div>
                        <div>
                          <div className="m-job"> {speaker.job}</div>
                          <div className="m-company"> {speaker.company}</div>
                        </div>
                      </div>

                      {speaker.image && (
                        <div className="speakers-image md:border-r-2 md:border-black">
                          <Image
                            src={urlForImage(speaker.image.asset)}
                            width={120} // Set appropriate width
                            height={120} // Set appropriate height
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

          {event._type === "parallelEvent" && (
              <div className="relative">
              <div className={`customGrid6 relative md:customGrid12 lightBlue px-4 md:px-0 bg-white border-b-2 border-black md:min-h-48 ${event.speakers && event.speakers.length > 0 ? 'sticky top-32 md:top-24 z-20' : ''}`}>
              <div className="pr-4 pt-8 pb-12 col-start-1 col-end-2 md:col-end-4 md:pl-8 md:pt-8 md:pr-4 md:pb-4 md:flex  ">
                          <div className="m-date break-all md:pr-1">{event.hourStart}</div>
                          {event.hourFinish && (
                            <div className="m-date flex md:gap-1">
                              {" "}
                              <div className="m-date md:block hidden "> →  </div>{" "}
                              {event.hourFinish}
                            </div>
                          )}
                        </div>
                        <div className="col-start-2 md:col-start-4 col-end-6 md:col-end-12  pl-4 gap-4 pt-6  md:pt-6 pb-6 flex flex-col items-start">
                        <div className=" m-text-agenda"> {event.nameOfEvent}</div>
                  <div className=" m-job lightBlue pb-2"> {event.subNameOfEvent}</div>
                  
                </div>
                <div className="blockLine absolute  w-full    border-black "></div>

                <div className="blueLine absolute bottom-0 left-0 h-2 w-full md:w-[97%] back-blue"></div>
                        </div>
                        {event.speakers && event.speakers.length > 0 && (
                          <div className="">
                            {event.speakers.map((speaker, index) => (
                              <div
                                className="flex md:flex-row-reverse relative customLine justify-between md:justify-end   border-b-2 border-black"
                                key={index}
                              >
                                <div className=" md:left-[26%] md:absolute flex flex-col justify-between md:justify-start p-4 md:pt-6 md:pb-8">
                                  <div className="m-speakers">{speaker.name}</div>
                                  <div>
                                    <div className="m-job"> {speaker.job}</div>
                                    <div className="m-company"> {speaker.company}</div>
                                  </div>
                                </div>
          
                                {speaker.image && (
                                  <div className="speakers-image md:border-r-2 md:border-black">
                                    <Image
                                      src={urlForImage(speaker.image.asset)}
                                      width={120} // Set appropriate width
                                      height={120} // Set appropriate height
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
          
                      </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default EventList;
