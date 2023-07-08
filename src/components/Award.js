import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ achievement, time, competition, work, place }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{
          y: 50,
        }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="space-y-4"
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:test-lg">
          {achievement}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:test-sm">
          {competition} | {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};
const Award = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Award
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            achievement="3rd Winner Innovation System"
            place="Indonesia"
            time="October 2022"
            competition="Healthkathon BPJS KESEHATAN RI 2022"
            work="As a dynamic team leader, skillfully organized and led a team in a prestigious competition, resulting in the successful development of a blockchain-based website application and API. Leveraging technologies such as ReactJS, TailwindCSS, ExpressJS, Azure Confidential Ledger, NodeJS, and MySQL, our team emerged triumphant, surpassing 415 out of 417 registered teams in the innovation system category through four rigorous stages. The outstanding performance in the competition garnered widespread recognition, with the announcement of our victory being reported on renowned news platforms like detik.com, Tribunnews.com, Jamkesnews.com, and bisnis.tempo.co, thereby elevating the reputation of UPI."
          />
          <Details
            achievement="2nd Winner Software Development"
            place="Yogyakarta, Indonesia"
            time="August 2022"
            competition="CODE 2022 AMIKOM"
            work="Collaborated with a team to successfully develop a website-based application integrating a robust Blockchain system, ensuring enhanced data security and transparency. Utilizing Laravel 9, Tailwind CSS, Azure Confidential Ledger, and PHP, our application demonstrated cutting-edge technology implementation. Remarkably, our team emerged as the sole representatives from West Java, surpassing over four teams from various universities across Indonesia, resulting in a resounding victory. This achievement showcases our exceptional skills and commitment to excellence in the field of web development."
          />
          <Details
            achievement="Champion Expectations 3 UI/UX Design"
            place="Indonesia"
            time="June 2022"
            competition="Dimas-TI AMLI 2022"
            work="As a key member of a collaborative team, successfully spearheaded the creation of a website-based application fortified with an innovative Blockchain system, bolstering data security and transparency. Leveraging a skillset encompassing Laravel 9, Tailwind CSS, Azure Confidential Ledger, and PHP, our application showcased advanced technological integration. Notably, our team stood out as the sole representatives from West Java, triumphing over more than four competing teams from diverse universities across Indonesia. This accomplishment highlights our exceptional aptitude and unwavering dedication to delivering cutting-edge solutions in the realm of web development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Award;
