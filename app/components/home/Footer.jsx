import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function Footer({ menuData }) {


  return (
    <footer className="footer back-blue">
      <div className=" text-white pb-5">FOLLOW US</div>
      <div className="flex flex-col gap-2">
        {menuData.map((item) => (
          <div key={item._key} className="footer-item text-white" >
            <a className="flex items-center gap-4" href={item.url} target="_blank" rel="noopener noreferrer">
              {/* Render image if available */}
              <div className="h-10 w-10">
              {item.icon && item.icon.asset && (
                <Image
                src={urlForImage(item.icon.asset)}

                  alt={item.name}
                  width={40}  // Set appropriate width
                  height={40} // Set appropriate height
                />
              )}
              </div>
      
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}
