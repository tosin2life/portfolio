import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from "./contexts/DarkModeContext";

function Footer() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo1} alt="logo" className="w-36 mx-auto mb-2" />
      </div>
      <div className="w-max flex items-center gap-2 mx-auto">
        <Image
          src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
          alt="mail-icon"
          className="w-6"
        />
        tosin2life@gmail.com
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>
          &copy; {new Date().getFullYear()} Tosin Portfolio. All rights
          reserved.
        </p>
        <ul className="flex items-center justify-between gap-10 mt-4 sm:mt-0">
          <Link target="_blank" href={"https://github.com/tosin2life"}>
            GitHub
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/oladele-bolaji-10a352195/"}
          >
            LinkedIn
          </Link>
          <Link target="_blank" href={"https://x.com/Bolz101"}>
            Twitter
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
