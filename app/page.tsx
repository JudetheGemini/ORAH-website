"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import MissionVision from "@/components/mission-and_vision";
import ContactForm from "@/components/contact-form";
import InitiativesSlider from "@/components/initiatives-slider";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center py-10 gap-6 mt-6"
      >
        <div className="flex flex-col items-center gap-6 px-4">
          <span className="font-inter text-darkBlue text-2xl md:text-5xl font-black max-w-5xl text-center tracking-wide leading-8 md:leading-16">
            Leading the Future of Ethical and Responsible{" "}
            <span className="text-teal">AI in Ottawa</span>
          </span>
          <span className="font-inter text-darkBlue sm:text-xl text-center max-w-2xl">
            Creating a community dedicated to ethical AI governance, education,
            advocacy, and innovation.
          </span>
          <button className="p-4 rounded-lg text-sm sm:text-base bg-teal text-white hover:bg-darkBlue">
            Join our community
          </button>
        </div>
        <div className="grid grid-cols-1 rounded-md max-w-4xl md:grid-cols-2 gap-6 md:gap-2">
          <Image
            className="rounded-xl px-4 hidden md:block"
            src="/orat/orat-event-15.jpg"
            alt=""
            width={700}
            height={500}
          />
          <Image
            className="rounded-xl px-4"
            src="/orat/orat-event-17.jpg"
            alt=""
            width={700}
            height={500}
          />
        </div>
      </motion.div>

      <MissionVision />
      <InitiativesSlider />
      <ContactForm />
    </>
  );
}
