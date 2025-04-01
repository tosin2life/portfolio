import Image from "next/image";
import { motion } from "motion/react";
import { useDarkMode } from "./contexts/DarkModeContext";

function InfoItems({ info }) {
  const { isDarkMode } = useDarkMode();
  const { icon, iconDark, title, description } = info;
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      className="border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-dark dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
    >
      <Image
        src={isDarkMode ? iconDark : icon}
        alt={title}
        className="w-7 mt-3"
      />
      <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-white/80">{description}</p>
    </motion.li>
  );
}

export default InfoItems;
