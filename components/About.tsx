import { motion } from "framer-motion";
import React from "react";
import mypic from "../public/image.jpg";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration:1.5
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      >
        <Image
          src={mypic}
          alt="MY PIC"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]" // image problem
        ></Image>
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Sure, heres a randomly generated text for you: In a world where
          technology and creativity intertwine, possibilities become endless.
          Ideas emerge like constellations in the night sky, forming patterns of
          innovation that push the boundaries of what we thought was achievable.
          The digital realm dances with the analog world, and together they
          compose a symphony of progress, echoing the rhythm of human ingenuity.
          As the sun sets on one horizon, it rises on another, illuminating the
          path to discovery with a curiosity that knows no bounds.
        </p>
      </div>
    </motion.div>
  );
}
