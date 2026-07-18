"use client"
import { Suspense } from "react";
import "./global.css"
import Hero from "@/components/hero/Hero";
import HeroSkeleton from "@/components/hero/HeroSkeleton"
import Projects from "@/components/projects/Projects";
import { projectsArray } from "@/data/projectsArray";
import Contacts from "@/components/contacts/Contacts";
import Button from "@/components/button/Button";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  let [isDarkmode, setIsDarkmode] = useState<boolean>();
    useEffect(() => {
        switch (localStorage.getItem("theme")) {
          case null:
            setIsDarkmode(true)
            localStorage.setItem("theme","dark")
            break;
          case "dark":
            setIsDarkmode(true)
            break;
          case "light":
            setIsDarkmode(false);
            document.body.classList.add("lightmode");
            break;
        }  
    },[]);
  function toggleTheme() {
        if (localStorage.getItem("theme") === "light") {
            localStorage.setItem("theme","dark");
            document.body.classList.remove("lightmode");
            setIsDarkmode(true);
        } else if (localStorage.getItem("theme") === "dark") {
            localStorage.setItem("theme","light");
            document.body.classList.add("lightmode");
            setIsDarkmode(false);
        }
    }; 
  return (
    <>
      <Button onClick={toggleTheme} className="switchThemeButton">
        {isDarkmode 
        ?<Image src="/icons/sun.svg" alt="sun" title="sun" width="24" height="24" />
        :<Image src="/icons/moon.svg" alt="moon" title="moon" width="24" height="24" />}
      </Button>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Projects projects={projectsArray}/>
      <Contacts />
    </>
  );
};
