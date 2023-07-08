import React from "react";
import Link from "next/link";
import { CircularText, CircularRing } from "./Icons";
import Image from "next/image";
import profilePic from "../../public/images/profile/main-image.png";

const HireMe = () => {
  return (
    // <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
    <div className="flex items-center justify-center overflow-hidden relative">
      <div
        className="w-full h-auto flex flex-col sm:max-h-[300px] md:max-h-[400px] lg:max-h-[450px] max-h-[500px]
        
      items-center justify-center"
      >
        {/* test
      <div
        className="w-full h-auto flex flex-col sm:max-h-[300px] md:max-h-[400px] lg:max-h-[450px] max-h-[500px]
      bg-pink-500 lg:bg-blue-500 md:bg-yellow-500 sm:bg-green-500 
      items-center justify-center"
      > */}
        {/* <CircularText className={"fill-dark dark:fill-light w-full h-fit "} /> */}
        <CircularRing className={"fill-dark dark:fill-light w-full h-fit "} />
        {/* <Link
          href="mailto: eldrianaxel1@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2
            bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
  
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
            hover:dark:border-light
            md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link> */}
      </div>
      <div
        className="w-full sm:max-h-[300px] md:max-h-[400px] lg:max-h-[450px] max-h-[500px]
      flex items-center bottom-0 justify-center absolute"
      >
        <Image
          src={profilePic}
          alt=""
          className="flex items-center justify-center bottom-4 sm:max-w-[255px] md:max-w-[350px] lg:max-w-[385px] max-w-[450px]"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
    </div>
  );
};

export default HireMe;
