import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="pt-4 px-4 pb-12 md:px-8 md:py-6 back-blue border-b-2 border-black  md:col-start-4 md:col-end-13 md:flex md:flex-col md:justify-between">
      <div className="flex justify-between">
        <div className="hero-text yellow uppercase">To exascale <br /> and beyond</div>
        <div className="hero-text red uppercase text-right">
          Antwerp <br /> summit 2024
        </div>
      </div>
      <div>
        <div className="flex justify-center py-16">
          <div className="w-3/5 md:w-full md:h-[63vh]">
            <Image priority className="md:h-full md:w-full" src="/cube.svg" alt="me" height={1000} width={1000} />
          </div>
        </div>
      </div>
      <div className="font-16px text-center text-white uppercase md:pb-2">
      Unleashing the Power of European HPC
and Quantum Computing
      </div>
    </div>
  );
}
