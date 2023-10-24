import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Introduction from "./Partials/Introduction";
import Personal from "./Partials/Personal";
import SaveMyCV from "./Partials/SaveMyCV";
import Skill from "./Partials/Skill";
import Work from "./Partials/Work";

const AboutMe = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <AnimatePresence>
      <motion.div
        className="progress-bar fixed left-0 right-0 top-0 z-10 h-2 origin-left bg-blue-600"
        style={{ scaleX }}
        key="progressbar"
      />
      <Main className="relative space-y-3">
        <Head title="Jongsun Park - About Me" />
        <Introduction />
        <Personal />
        <Work />
        <SaveMyCV />
        <Skill />
      </Main>
    </AnimatePresence>
  );
};

export default AboutMe;
