import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}
    className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-4 pt-[100px] md:pt-20 sm:pt-10 lg:pt-[100px]">
        <Skill percentage="95%" skillType="flutter"/>
        <Skill percentage="80%" skillType="ts"/>
        <Skill percentage="90%" skillType="js"/>
        <Skill percentage="90%" skillType="node"/>
        <Skill percentage="90%" skillType="dart"/>
        <Skill percentage="85%" skillType="firebase"/>
        <Skill percentage="100%" skillType="vscode"/>
        <Skill percentage="70%" skillType="nextjs"/>
        <Skill percentage="80%" skillType="react"/>
        <Skill percentage="80%" skillType="mongo"/>
        <Skill percentage="70%" skillType="tailwind"/>
        <Skill percentage="100%" skillType="postman"/>
      </div>
    </motion.div>
  );
}
