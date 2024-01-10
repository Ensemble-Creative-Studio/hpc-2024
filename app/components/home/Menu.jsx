import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Menu({ menuData }) {
 

  const renderLink = (item) => {
    if (item._type === "externalLink") {
      // External Link
      return (
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col gap-1">
            <div className="menu-item">{item.name}</div>
            <div className="sub-menu-item">{item.subName}</div>
          </div>
        </a>
      );
    } else {
      // Internal Link
      return (
        <Link href={item.url}>
            <div className="flex flex-col gap-1">
            <div className="menu-item">{item.name}</div>
            <div className="sub-menu-item">{item.subName}</div>
          </div>
        </Link>
      );
    }
  };

  return (
    <div className=" back-blue text-white pb-16">
      <div className="flex flex-col gap-10">
        {menuData.map((item) => (
          <div key={item._key}>{renderLink(item)}</div>
        ))}
      </div>
    </div>
  );
}
