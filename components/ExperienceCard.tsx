import React from "react";
import Image from "next/image";
import flutter from "../public/flutter.png";
import firebase from "../public/firebase.svg";
import dart from "../public/dart.png";
import vscode from "../public/vscode.png"
import { motion } from "framer-motion";

type Props = {
    title:string,
    companyName:string,
    date:string,
    summary:string,
    companyLogo: any
};

export default function ExperienceCard({title,companyName,date,summary,companyLogo}: Props) {
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
          src={companyLogo}
          alt=""
          className="h-32 w-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        ></Image>
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1">{companyName}</p>
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
            src={firebase}
            alt="Firebase"
          ></Image>
          {/* Tech Stack */}
          <Image
            className="h-10 w-10 rounded-full"
            src={dart}
            alt="Dart"
          ></Image>
          {/* Tech Stack */}
          <Image
            className="h-10 w-10 rounded-full"
            src={vscode}
            alt="Vscode"
          ></Image>
        </div>
        <p className="uppercase py-5 text-gray-300">{date}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {/* <li>Developing a grocery mobile app for iOS using Flutter streamlines cross-platform development and ensures a consistent user experience.</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li> */}
          <li>{summary}</li>
        </ul>
      </div>
    </article>
  );
}
