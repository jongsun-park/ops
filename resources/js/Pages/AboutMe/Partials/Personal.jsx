/**
 *   2. About Me: Personal Information: Provide some background information
        about yourself, such as your location and contact information.
        Professional Background: Share a concise overview of your education,
        work experience, and any relevant certifications.
 */

import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Container from "./Container";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Personal = () => {
  let [categories] = useState({
    Experiences: [
      {
        id: 1,
        title: "Specific Matter Expert at CPL for Twitter",
        date: "SEP 2021 - NOW",
        description:
          "I served as a member of the SME team, where my responsibilities included overseeing and distributing tasks among team members to ensure that service level agreements were consistently met, and that operations maintained a high level of performance. I also provided daily reports on performance and offered forward-looking insights into capacity levels to ensure that operations were consistently well-prepared for their tasks.",
      },
      {
        id: 2,
        title: "Freelance Web Developer",
        date: "JUNE 2021 - NOW",
        description:
          "I created WordPress and Shopify websites for small clients. Additionally, I utilized Adobe XD and React to design and implement an analytics dashboard. Furthermore, I built a Single Page Application (SPA) for the distribution of presentations to shareholders.",
      },
      {
        id: 3,
        title: "Junior Web Developer at Fat Fish Marketing, IRE",
        date: "DEC 2018 - APR 2020",
        description:
          "Creating websites using WordPress and Shopify, as well as developing software and website prototypes with Adobe XD. Additionally, I assist in establishing marketing platforms with integrated automated reporting, utilizing React.js and Gatsby.",
      },
    ],
    Educations: [
      {
        id: 1,
        title: "Certificate in Programming (LV 6) at DKIT, IRE",
        date: "SEP 2018 - SEP 2019",
        description: "",
      },
      {
        id: 2,
        title:
          "Business Administration and Chinese Literature at Yeungnam University, KR",
        date: "MAR 2008 - MAR 2015",
        description: "NFQ Level 8 / Honours Bachelor Degree Equivalent",
      },
    ],
    Certifications: [
      {
        id: 1,
        title: "Programming",
        items: [
          "Let's Learn Laravel: A GuidedPath For Beginners by Brad Schiff",
          "Become a WordPress Developer: Unlocking Power With Code by Brad Schiff",
          "The Advanced Web Developer Bootcamp by Colt Steele",
          "React and Typescript: Build a Portfolio Project by Stephen Grider",
          "Complete WordPress Developer Course - Plugins & Themes by Luis Ramirez Jr",
          "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno) by Maximilian Schwarzmüller",
          "React - The Complete Guide (incl Hooks, React Router, Redux) by Maximilian Schwarzmüller",
        ],
      },
      {
        id: 2,
        title: "Design",
        items: [
          "Graphic Design Masterclass - Learn GREAT Design by Lindsay Marsh",
          "Master Digital Product Design: UX Research & UI Design by Rob Sutcliffe",
          "Design Mobile Apps: UI, UX & Prototyping in Adobe XD & PS by Cristian Doru Barin",
          "Complete Web Design: from Figma to Webflow to Freelancing by Vako Shvili",
          "Master Web Design in Photoshop by Cristian Doru Barin",
        ],
      },
    ],
  });

  return (
    <Container className="bg-transparent p-0 shadow-none">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-800 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white font-semibold shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white",
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
              )}
            >
              <ul>
                {posts.map((post) => (
                  <motion.li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                    initial={{ opacity: 1, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 1, x: -10 }}
                  >
                    <h3 className="text-sm font-bold leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex flex-col space-y-1.5 text-sm font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>{post.description}</li>
                      {post.items &&
                        post.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                    </ul>

                    <a
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2",
                      )}
                    />
                  </motion.li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Container>
  );
};

export default Personal;
