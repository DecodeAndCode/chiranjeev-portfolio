import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import projectImg from "../public/project.png";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      projectName: "Vibe Chat",
      description: `Built secure chat app with real-time messaging using Flutter and
      Firebase, employing robust authentication for data privacy and
      seamless UI toolkit for user experience.`,
    },
    {
      projectName: "ChatGPT Mobile App",
      description: `Created a ChatGPT like App with 90% accuracy using the Flutter SDK
      for a seamless user experience for cross plarform users.`,
    },
    {
      projectName: "Todo List App",
      description: `Created a clean architecture-based To-Do list app in Flutter with a user-friendly interface for adding, editing, and deleting tasks.
      Employed the provider package for state management, enabling real-time updates across different screens for an enhanced user experience.`,
    },
  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="realtive w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => {
          return (
            <div
              key={project.projectName}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:44 h-screen"
            >
              <motion.div
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
              >
                <Image src={projectImg} alt="" className="h-auto w-90"></Image>
              </motion.div>
              <div className="space-y-10 px-10 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case study {i + 1} of {projects.length} :
                  </span>{" "}
                  {project.projectName}
                </h4>
                <p className="text-lg text-center md:text-left">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
