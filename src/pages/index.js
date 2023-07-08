import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <TransitionEffect />
      <main className="flex items-center text-dark w-full h-fit dark:text-light ">
        <Layout
          className="sm:mb-38 lg:mb-52
        sm:mt-20 lg:mt-16"
        >
          <div className="flex items-center justify-between w-full lg:flex-col mb-40 lg:mb-72">
            <div className="w-1/2 lg:w-full ">
              <div className="max-w-full h-auto sm:mb-6 lg:mb-6">
                <HireMe />
              </div>
            </div>
            <div
              className="
            w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center sm:mb-4 lg:mb-2"
            >
              <AnimatedText
                text="Hi, I'm Axel"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a web developer, my commitment lies in transforming ideas
                into innovative web applications. Explore my latest projects and
                articles, showcasing my expertise in web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center space-x-4">
                <Link
                  href="/CV - Axel Eldrian Hadiwibowo.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg
                font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <div className="w-6 ml-1">
                    <LinkArrow />
                  </div>
                </Link>
                <Link
                  href="/projects"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg
                font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  My Project
                  <div className="w-6 ml-1">
                    <LinkArrow />
                  </div>
                </Link>
                {/* <Link
                  href="mailto:eldrianaxel1@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link> */}
              </div>
            </div>
          </div>

          <AboutMe />
          <Skills />
          <Experience />
          <Education />
        </Layout>
        {/* <HireMe /> */}
      </main>
    </>
  );
}
