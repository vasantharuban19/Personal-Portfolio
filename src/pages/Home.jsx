import React, { lazy, Suspense, useRef } from "react";
import Profile from "./SubComponents/Profile";
import About from "./SubComponents/About";
import Footer from "./Footer";
import LoadingButton from "../components/LoadingButton";

const Skills = lazy(() => import("./SubComponents/Skills"));
const Apps = lazy(() => import("./SubComponents/Apps"));
const Contact = lazy(() => import("./SubComponents/Contact"));
const Timeline = lazy(() => import("./SubComponents/Timeline"));
const Projects = lazy(() => import("./SubComponents/Projects"));

const Home = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <main className="px-5 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 mx-auto w-full max-w-[1050px] flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
      <Profile contactRef={contactRef} aboutRef={aboutRef} />
      <Suspense fallback={<p>Loading Timeline...</p>}>
        <Timeline />
      </Suspense>
      <div ref={aboutRef}>
        <About />
      </div>
      <Suspense fallback={<p>Loading Skills...</p>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<p>Loading Projects...</p>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<p>Loading Apps...</p>}>
        <Apps />
      </Suspense>
      <Suspense fallback={<p>Loading Contact...</p>}>
        <div ref={contactRef}>
          <Contact />
        </div>
      </Suspense>
      {/* <Footer /> */}
    </main>
  );
};

export default Home;
