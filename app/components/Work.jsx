import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from "./contexts/DarkModeContext";
import { motion } from "motion/react";

function Work() {
  const { isDarkMode } = useDarkMode();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg mb-2 font-secondary"
      >
        My portfolio
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-secondary"
      >
        My latest work
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-secondary"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-auto my-10 gap-5 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 absolute rounded-md  bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-500">
              <div>
                <h2 className="font-semibold ">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition ">
                <Link href={`${project.link}`} target="_blank">
                  <Image
                    src={assets.send_icon}
                    alt="send-icon"
                    className="w-5"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <Link
          href="https://github.com/tosin2life"
          target="_blank"
          className="w-max mx-auto my-10 flex items-center justify-center gap-2 text-gray-800 border-[0.5px] border-gray-600 py-3 px-9 rounded-full hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        >
          Show more{" "}
          <Image
            alt="show-more"
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow}
            className="w-4"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Work;
