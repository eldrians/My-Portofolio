import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import AboutMe from "@/components/AboutMe";

const about = () => {
  return (
    <>
      <Head>
        <title>Axel Eldrian Hadiwibowo | About Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          {/* <AboutMe /> */}
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
