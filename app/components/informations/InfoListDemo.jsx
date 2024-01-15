import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
function InfoListDemo({ events }) {
  const linkRenderer = ({ children, value }) => (
    <a href={value.href} target="_blank" rel="noopener noreferrer" className="m-text-agenda">
      {children}
    </a>
  );

  // Custom component for rendering 'p' tags
  const paragraphRenderer = ({ children }) => {
    // Check if the block contains only an empty text span
    if (children.length === 1 && children[0] === '') {
      return <br />;
    }
    return <p className="m-text-agenda">{children}</p>;
  };


  const ImageComponent = ({ value }) => {
    if (!value?.asset) {
      return null;
    }

    // Extract the image ID from the asset reference
    const imageId = value.asset._ref; // Adjust according to your asset reference format

    return (
      <div className="w-full pb-8">
  <Image
        priority
        className="md:h-full md:w-full"
        src={urlForImage({ _id: imageId })}
        alt="Event Image"
        height={1800}
        width={1800}
      />
      </div>
    
    );
  };

  // Define the components to override
  const components = {
    types: {
      image: ImageComponent, // Define the renderer for 'image' type
    },
    marks: {
      link: linkRenderer,
    },
    block: {
      normal: paragraphRenderer,
    },
  };

  return (
    <div className=" md:col-start-4 md:col-end-12  ">
      <div className=" ">
        <div className="customGrid6 relative md:customGrid12 text-black md:px-0 border-b-2 border-black md:min-h-[450px] ">
          <div className="pr-4 pt-8 px-4  pb-12 col-start-1 col-end-2 md:col-end-4 md:pl-8 md:pt-8 md:pr-4 md:pb-4 md:flex  ">
            {/* <div className="m-date break-all md:pr-1">{event.hourStart}</div> */}
            {/* {event.hourFinish && (
                <div className="m-date flex md:gap-1">
                  {" "}
                  <div className="m-date md:block hidden "> → </div>{" "}
                  {event.hourFinish}
                </div>
              )} */}
          </div>
          <div className="col-start-2 md:col-start-4 col-end-6 md:col-end-12  pl-4 gap-4 pt-6 md:pt-6 pb-6 flex flex-col items-start md:min-h-48">
            <div className="m-text-agenda linkedA pb-12">
            <PortableText value={events.text} components={components} />
            </div>
          </div>
          <div className="blockLine absolute r w-full    border-black "></div>
        </div>
      </div>
    </div>
  );
}

export default InfoListDemo;
