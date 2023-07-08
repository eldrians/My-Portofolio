import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work, role }) => {
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
          {position}
          &nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:test-primaryDark capitalize"
          >
            @ {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:test-sm">
          {time} | {address} | {role}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
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
            position="Software Engineer"
            company="PT.GITS Indonesia"
            companyLink="https://gits.id/"
            role="Internship"
            time="Februari - June 2023"
            address="Bandung, Indonesia"
            work="Consistently delivering exceptional results, I successfully implemented the Object and Key Result concept to enhance task performance. By applying the Scrum methodology with a Trunk-Based Development approach, I improved software development practices, fostered iterative progress, and facilitated seamless collaboration. With proficiency in various programming tools such as Nuxt, Vue.js, TypeScript, and Jest, I ensured the development of high-quality, reliable software applications."
          />
          <Details
            position="Full-Stack Developer"
            company="OWL COURSE"
            companyLink="https://www.instagram.com/owlcourse.id/"
            role="Freelance"
            time="December 2022 - January 2023"
            address="Bandung, Indonesia"
            work="Entrusted to collaborate with owlcourse.id, I played a key role in developing a computer-assisted test website for the selection process of POLRI, TNI, KEDINASAN, and CPNS in Makassar. As a Back-end developer, I designed and implemented an API using CodeIgniter as the framework and MySQL as the DBMS. Additionally, as a Front-end developer, I created an engaging website using ReactJS and TailwindCSS, utilizing Figma as the design tool. Throughout the project, I actively contributed to the design process, presented daily progress, conducted rigorous testing, and successfully deployed the website on the server with CPanel."
          />
          <Details
            position="Full-Stack Developer"
            company="Universitas Pendidikan Indonesia"
            companyLink="/"
            role="Freelance"
            time="September - December 2023"
            address="Bandung, Indonesia"
            work="Played a pivotal role in a collaborative project with professors, lecturers, and seniors to successfully plan, create, and develop augmented reality-based autism detection websites. Demonstrated exceptional skills by designing and creating the website using Laravel and TailwindCSS frameworks, while adhering to the MVC architectural pattern. Effectively utilized Figma as a design tool and consistently presented daily progress updates to the team, showcasing strong project management and communication abilities."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
