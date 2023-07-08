import React, { useRef, useEffect } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import { useMotionValue, useInView, useSpring } from "framer-motion";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      // console.log(latest);
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const AboutMe = () => {
  return (
    <>
      <AnimatedText
        text="About Me!"
        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-6xl"
      />
      <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-1 md:col-span-8">
          <h2 className="mb-4 sm:text-lg lg:text-xl text-xl sm:mt-4 font-bold uppercase text-dark/75 dark:text-light/75">
            Biography
          </h2>
          <div className="space-y-6 sm:text-sm lg:text-base">
            <p className="font-medium">
              Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my
              clients&apos; visions to life.
            </p>
            <p className="font-medium">
              I believe that design is about more than just making things look
              pretty – it&apos;s about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium">
              Whether I&apos;m working on a website, mobile app, or other
              digital product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
        </div>
        <div
          className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
              bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 sm:mb-6 lg:mb-8 "
        >
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"></div>
          <Image
            src={profilePic}
            alt="Axel Eldrian Hadiwibowo"
            className="w-full h-auto rounded-2xl"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-1">
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumbers value={50} />+
            </span>
            <h2
              className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
            >
              Satisfied clients
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumbers value={40} />+
            </span>
            <h2
              className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
            >
              Projects completed
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumbers value={2} />+
            </span>
            <h2
              className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
            >
              years of experience
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
