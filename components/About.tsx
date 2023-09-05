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
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        <div className="relative w-64 h-64 md:w-72 md:h-72 xl:w-96 xl:h-96">
          <Image
            src={mypic}
            alt="MY PIC"
            layout="fill"
            objectFit="cover"
            className="rounded-full md:rounded-lg"
          />
        </div>
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
        Hello, I&apos;m a passionate Fullstack Developer with a flair for crafting both web and mobile applications. My journey in the tech world is fueled by a relentless drive to contribute to open source projects and explore the exciting realms of crypto and web3 technologies. Whether it&apos;s building innovative solutions or diving into the fascinating world of blockchain and cryptocurrencies, I&apos;m always eager to push the boundaries of what&apos;s possible. Join me on this thrilling adventure where we code, collaborate, and make a positive impact in the ever-evolving landscape of technology.
        </p>
      </div>
    </motion.div>
  );
}
