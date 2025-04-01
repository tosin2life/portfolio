"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDarkMode } from "./contexts/DarkModeContext";

function Navbar() {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const { isDarkMode, setDarkMode, handleDarkMode } = useDarkMode();

  const openSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-11/12 -z-40 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="bg-color" className="w-full" />
      </div>
      <nav
        className={`w-full fixed flex justify-between items-center px-5 py-4 lg:px-8 xl:px-[8%] z-50 ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <Link href="#top">
          <Image
            src={assets.logo1}
            className="w-28 cursor-pointer mr-14"
            alt="Logo"
          />
        </Link>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          } rounded-full font-secondary`}
        >
          <Link href="/">Home</Link>
          <Link href="#about">About me</Link>
          <Link href="#services">Services</Link>
          <Link href="#work">My Work</Link>
          <Link href="#contact">Contact me</Link>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={handleDarkMode}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              className="w-6 cursor-pointer"
              alt="moon crescent"
            />
          </button>
          <Link
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-secondary dark:border-white/50"
            href="#contact"
          >
            Contact
            <Image
              alt="right-facing-arrow"
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
            />
          </Link>
          <button className="block md:hidden ml-3" onClick={openSideMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* mobile-menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-secondary dark:bg-darkHover dark:text-white"
        >
          <div className="absolute top-6 right-6" onClick={closeSideMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close-icon"
              className="w-5 cursor-pointer"
            />
          </div>
          <Link href="/" onClick={closeSideMenu}>
            Home
          </Link>
          <Link href="#about" onClick={closeSideMenu}>
            About me
          </Link>
          <Link href="#services" onClick={closeSideMenu}>
            Services
          </Link>
          <Link href="#work" onClick={closeSideMenu}>
            My Work
          </Link>
          <Link href="#contact" onClick={closeSideMenu}>
            Contact me
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
