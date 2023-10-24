/**
     1. Introduction: Header: Include your name and a professional title (e.g.,
      Web Developer, Front-End Developer, Full-Stack Developer). Introduction
      Statement: Write a brief, engaging summary of your skills, experience, and
      passion for web development.
 */

// import Container from "./Container";
import { motion } from "framer-motion";
import bg from "./Images/micah-boswell-OPnBJ5L2oxs-unsplash.jpg";
import github from "./svgs/github-svgrepo-com.svg";
import email from "./svgs/google-svgrepo-com.svg";
import linkedin from "./svgs/linkedin-svgrepo-com.svg";

const Icon = ({ src, alt, className }) => (
  <motion.div
    className="rounded bg-white p-1 text-white hover:cursor-pointer"
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.1 },
    }}
    whileTap={{ scale: 0.9 }}
  >
    <img src={src} alt={alt} className={`h-8 w-8 ${className}`} />
  </motion.div>
);

const Introduction = () => (
  <motion.div
    className="relative mx-3 overflow-hidden rounded-xl bg-cover bg-fixed bg-center bg-no-repeat shadow sm:mx-3"
    style={{ backgroundImage: `url(${bg})` }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
  >
    <div className="absolute inset-0 bg-blue-800/75"></div>

    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[50vh] lg:items-center lg:px-8">
      <div className="max-w-xl text-left ltr:sm:text-left">
        <h1 className="text-2xl font-extrabold text-slate-300 sm:text-3xl">
          Hello, I'm
          <strong className="block text-5xl font-extrabold text-white">
            Jongsun Park.
          </strong>
        </h1>

        <p className="mt-4 max-w-lg text-slate-300 sm:text-xl/relaxed">
          A Subject Matter Expert (SME) at Cpl onsite X{" "}
          <br className="hidden sm:block" />
          and a freelance web developer.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="mailto:jongsun-coder@gamil.com"
            target="_blank"
            title="Email Me"
          >
            <Icon src={email} alt="Email" />
          </a>

          <a
            href="https://www.linkedin.com/in/jongsun-park/"
            target="_blank"
            title="LinkedIn"
          >
            <Icon src={linkedin} alt="linkedin" />
          </a>

          <a
            href="https://github.com/jongsun-park"
            target="_blank"
            title="GitHub - Jongsun Park Profile"
          >
            <Icon src={github} alt="github" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Introduction;
