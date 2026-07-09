"use client"
import Image from "next/image"
import SkillsWrapper from "../skillsWrapper/SkillsWrapper"
import { skillsArray } from "@/data/skillsArray"
import "./hero.modules.css"

export default function Hero() {
    let skillsArrayCopy = Object.values(skillsArray);
    return(
        <main className="hero">
            <div className="heroTextContainer">
                <h1 className="hero_title">alexander neftali miranda</h1>
                <p className="hero_paragraph">
                    I'm Alexander a frontend web developer with <b>+3 years</b> of experience in tech industry.
                </p>
                <h2 className="hero_subtitle">Frontend Web Developer</h2>
            </div>
            <Image 
            title="Alexander Neftali Miranda"
            alt="Alexander Neftali Miranda"
            src="/images/Hero_Image1-small.png"
            width="420"
            height="600"
            />
            <section className="skillsSection">
                <h2 className="skillsSection_title">Skills</h2>
                <SkillsWrapper skills={skillsArrayCopy}/>
            </section>
        </main>
    )
};