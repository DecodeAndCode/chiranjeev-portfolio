import React from "react";
import firebase from "../public/firebase.png";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
              key={projects[project]}
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
                <Image src={firebase} alt="" className="h-32 w-32"></Image>
              </motion.div>
              <div className="space-y-10 px-10 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case study {i + 1} of {projects.length} :
                  </span>{" "}
                  chatGPT clone
                </h4>
                <p className="text-lg text-center md:text-left">
                  Sure, heres a randomly generated text for you: In a world
                  where technology and creativity intertwine, possibilities
                  become endless. Ideas emerge like constellations in the night
                  sky, forming patterns of innovation that push the boundaries
                  of what we thought was achievable. The digital realm dances
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