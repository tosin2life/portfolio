"use client";
import { createContext, useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import { DarkModeProvider } from "./components/contexts/DarkModeContext";

const DarkContext = createContext();

export default function Home() {
  return (
    <DarkModeProvider>
      <>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </>
    </DarkModeProvider>
  );
}
