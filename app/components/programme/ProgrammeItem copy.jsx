import React from "react";
import Footer from "../home/Footer";
function PageFooter({ item, className }) {
  return (
    <div className="sticky z-30 top-16 md:col-start-1 md:col-end-4 md:border-r-2 md:border-black">
      <div className={className}>
        <div className="customGrid6 md:flex md:flex-col md:justify-between  h-16 md:h-full sticky top-0 border-b-2 border-black md:border-none text-white px-4 md:px-12 md:py-5">
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
    </div>
  );
}

export default ProgrammeItem;
