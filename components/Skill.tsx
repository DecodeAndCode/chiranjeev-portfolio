import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import flutter from "../public/flutter.png";
import firebase from "../public/firebase.svg";
import dart from "../public/dart.svg";
import vscode from "../public/vscode.svg";
import js from "../public/js.svg";
import ts from "../public/ts.svg";
import node from "../public/node.svg"
import nextjs from "../public/nextjs.svg"
import react from "../public/react.png"
import mongo from "../public/mongo.svg"
import tailwind from "../public/tailwind.png"
import postman from "../public/postman.svg"

type Props = {
  directionLeft?: boolean;
  percentage: string;
  skillType: "flutter" | "firebase" | "dart" | "vscode" | "js" | "ts" | "node" | "nextjs" | "react" | "mongo" | "tailwind" | "postman";
};

export default function Skill({ directionLeft, percentage, skillType }: Props) {
  const getImageSrc = () => {
    switch (skillType) {
      case "flutter":
        return flutter;
      case "firebase":
        return firebase;
      case "dart":
        return dart;
      case "vscode":
        return vscode;
      case "js":
        return js;
      case "ts":
        return ts;
      case "node":
        return node;
      case "nextjs":
        return nextjs;
      case "react":
        return react;
      case "mongo":
        return mongo;
      case "tailwind":
        return tailwind;  
      case "postman":
        return postman;
      default:
        return "";
    }
  };
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Image
          src={getImageSrc()}
          alt=""
          className="rounded-full border border-gray-500 object-contain w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale duration-300 ease-in-out"
        />
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {" "}
            {percentage}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
