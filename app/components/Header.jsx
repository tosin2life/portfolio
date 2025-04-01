import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="text-center flex flex-col items-center gap-4 w-11/12 max-w-3xl mx-auto py-20 md:pt-24 lg:pt-28">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile-image"
          className="rounded-full w-32"
        />
      </motion.div>

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-secondary"
      >
        Hi! I am Oladele Oluwatosin
        <Image src={assets.hand_icon} alt="hand-icon" className="w-6" />
      </motion.h1>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-secondary"
      >
        Frontend web developer based in Nigeria
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-2xl mx-auto font-secondary"
      >
        I am a frontend web developer based in Nigeria. I love to create
        beautiful and responsive websites. I am passionate about learning new
        things and I am always looking for new opportunities to grow.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            href={"#contact"}
            className="px-10 py-3 bg-black border border-white rounded-full flex items-center gap-2 text-white dark:bg-transparent"
          >
            contact me
            <Image
              src={assets.right_arrow_white}
              alt="right-arrow"
              className="w-4 "
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Link
            href={"/sample-resume.pdf"}
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
          >
            my resume
            <Image
              src={assets.download_icon}
              alt="right-arrow"
              className="w-4"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
