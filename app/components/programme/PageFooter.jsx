import React from "react";
import Footer from "../home/Footer";
function PageFooter({ menuData }) {
  return (
    <>
      <div className="border-b-2  border-black">
        <div className="customGrid6 relative md:customGrid12 back-blue  pl-3 md:pl-0 ">
          <div className="col-start-1 col-end-2 back-blue  border-r-2 md:border-none border-black"></div>
          <div className="col-start-2 col-end-7 md:col-start-1 md:col-end-4 md:border-r-2 md:border-t-2   border-black  back-blue informations py-6 px-4 md:py-4 text-white md:px-8">
            
            <div className="informations break-words">
            INFORMATION
            </div>
          </div>
          <div className=" md:border-black md:block hidden md:col-end-12 md:col-start-4   ">

          </div>
          <div className="blockLine footerLine absolute  w-full    border-black "></div>
        </div>
      </div>
      <div className="border-b-2 border-black">
      <div className="customGrid6 relative md:customGrid12 back-blue pr-4 pl-4 md:pl-0 ">
          <div className="col-start-1 col-end-2 back-blue md:col-end-4 md:border-none  border-r-2 border-black"></div>
          <div className="col-start-2  col-end-7 md:col-start-4 md:col-end-11 md:border-l-2 border-black  back-blue informations py-8 pl-8 pr-2 text-white md:px-8">
          <Footer menuData={menuData[0].footer} />
          </div>
          <div className="blockLine footerLine absolute  w-full    border-black "></div>
        </div>
      </div>
    </>

 
  );
}

export default PageFooter;
