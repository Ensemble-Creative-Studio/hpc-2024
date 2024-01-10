import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Header({page}) {
  return (
    <header className=" z-50 customGrid6 md:customGrid12 h-16 md:h-24 border-b-2 border-black sticky top-0 bg-white px-4 md:px-0">
      <div className="m-text-agenda flex items-center border-r-2  border-black md:col-start-1 md:col-end-4 md:px-12 md:justify-between">
        <Link href="./" className="m-text-agenda ">
          Menu
        </Link>
        <div className="md:flex hidden items-center col-end-7 justify-end gap-x-5 md:gap-x-12">
          <div className="h-12 md:h-16">
            <Image src="/Logos.svg" alt="me" height={30} width={30} />
          </div>
          <div className="h-12 md:h-16">
            <Image src="/Logos-1.svg" alt="me" height={30} width={30} />
          </div>
        </div>
      </div>
      {page && (
      <div className="menu-anchor md:hidden col-start-2 flex col-end-6 items-center pl-4 gap-4">
        <a href="#monday">
          <div className="block md:hidden m-text-agenda">Mon</div>
          <div className="md:block hidden m-text-agenda">Monday</div>
        </a>
        <a href="#tuesday">
        <div className="block md:hidden m-text-agenda">Tue</div>
        <div className="md:block hidden m-text-agenda">Tuesday</div>
        </a>
        <a href="#wednesday">
        <div className="block md:hidden m-text-agenda">Wed</div>
        <div className="md:block hidden m-text-agenda">Wednesday</div>
        </a>
        <a href="#thursday">
        <div className="block md:hidden m-text-agenda">Thu</div>
        <div className="md:block hidden m-text-agenda">Thursday</div>
        </a>
      </div>
         )}
      <div className="flex md:hidden items-center col-end-7 justify-end gap-x-5">
        <div className="h-12">
          <Image src="/Logos.svg" alt="me" height={30} width={30} />
        </div>
        <div className="h-12">
          <Image src="/Logos-1.svg" alt="me" height={30} width={30} />
        </div>
      </div>
      {page && (
      <div className="menu-anchor hidden col-start-4 md:flex col-end-13 items-center justify-between pl-8 pr-12">
        <div className=" md:flex col-end-13 items-center  gap-8">
        <a href="#monday">
          <div className="block md:hidden m-text-agenda">Mon</div>
          <div className="md:block hidden m-text-agenda">Monday</div>
        </a>
        <a href="#tuesday">
        <div className="block md:hidden m-text-agenda">Tue</div>
        <div className="md:block hidden m-text-agenda">Tuesday</div>
        </a>
        <a href="#wednesday">
        <div className="block md:hidden m-text-agenda">Wed</div>
        <div className="md:block hidden m-text-agenda">Wednesday</div>
        </a>
        <a href="#thursday">
        <div className="block md:hidden m-text-agenda">Thu</div>
        <div className="md:block hidden m-text-agenda">Thursday</div>
        </a>
        </div>
        <a href="mailto:'me@mail.com'" className="m-text-agenda ">
          Contact
        </a>
      </div>
         )}
    </header>
  );
}
