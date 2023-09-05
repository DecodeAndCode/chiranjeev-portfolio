import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import dp from "../public/dp.png";
import vt from "../public/vt.jpeg";
import niegfg from "../public/niegfg.jpeg";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        WorkExperience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* Experience */}
        <ExperienceCard
          companyLogo={dp}
          title="Flutter Developer Intern"
          companyName="DigitalPhora"
          date="Started Arp 2023 - May 2023"
          summary="Developing a grocery mobile app for iOS using Flutter streamlines cross-platform development and ensures a consistent user experience.
Utilizing resource-efficient REST APIs in PHP for data retrieval and pagination reduces server load and enhances app performance.
Implementing state management with Provider in Flutter improves code maintainability and leads to a 30% increase in app efficiency.
The choice of technology stack and architecture optimizations contribute to a responsive and resource-efficient grocery mobile app for iOS."
        />
        {/* Experience */}
        <ExperienceCard
          companyLogo={vt}
          title="Flutter Developer Intern"
          companyName="Visanka Technologies"
          date="Started Mar 2023 - Apr 2023"
          summary="Developed cross-platform mobile applications using Flutter SDK, which led to a 30% increase in overall user engagement, optimized performance with a memory-efficient list builder on the notification page, reducing memory usage by 40%, and improved usability and user satisfaction by 25% through the implementation of Firebase phone authentication and QR scanning features."
        />
        {/* Experience */}
        <ExperienceCard
          companyLogo={niegfg}
          title="Volunteer"
          companyName="NIE GeeksforGeeks Student Chapter"
          date="Started Feb 2023 - Present"
          summary="I volunteered with the NIE GeeksforGeeks Student Chapter, where I designed and delivered technical workshops for NIE students and collaborated with team members to plan successful events, all while contributing to administrative tasks."
        />
      </div>
    </motion.div>
  );
}
