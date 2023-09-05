import React from "react";
import Image from "next/image";
import dp from "../public/dp.png";
import flutter from "../public/flutter.png";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
      >
        <Image
          src={dp}
          alt=""
          className="h-32 w-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        ></Image>
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Flutter Developer Intern</h4>
        <p className="font-bold text-2xl mt-1">DigitalPhora</p>
        <div className="flex space-x-2 my-2">
          {/* Tech Stack */}
          <Image
            className="h-10 w-10 rounded-full"
            src={flutter}
            alt="Flutter"
          ></Image>
          {/* Tech Stack */}
          <Image
            className="h-10 w-10 rounded-full"
            src={flutter}
            alt="Flutter"
          ></Image>
          {/* Tech Stack */}
          <Image
            className="h-10 w-10 rounded-full"
            src={flutter}
            alt="Flutter"
          ></Image>
          {/* Tech Stack */}
          <Image
            className="h-10 w-10 rounded-full"
            src={flutter}
            alt="Flutter"
          ></Image>
        </div>
        <p className="uppercase py-5 text-gray-300">Started Arp 2023 - May 2023</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
