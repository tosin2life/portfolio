import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import TextExpander from "./TextExpander";
import { motion } from "motion/react";

function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg mb-2 font-secondary"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-secondary"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-secondary"
      >
        Frontend Developer skilled in HTML, CSS, Vanilla Javascript, React,
        Next.js. Passionate about building scalable web applications with
        optimized performance. Strong problem-solving abilities with experience
        in Deep Learning research.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, duration: 0.6 }}
        className="grid grid-auto gap-6 my-12"
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-dark cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt="icon-image" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              <TextExpander>{description}</TextExpander>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
