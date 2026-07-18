import Image from "next/image"
import SkillsWrapper from "../skillsWrapper/SkillsWrapper"
import { skillsObject } from "@/data/skillsObject"
import "./hero.modules.css"

export default function Hero() {
    return(
        <main className="hero">
            <div className="heroTextContainer">
                <h1 className="hero_title">alexander neftali miranda</h1>
                <p className="hero_paragraph">
                    Hi, I'm Alexander a full-stack web developer from the Dominican Republic with more than <b>+1 year</b> of experience building web applications.
                </p>
                <h2 className="hero_subtitle">Full-Stack Web Developer</h2>
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
                <SkillsWrapper skills={Object.values(skillsObject)}/>
            </section>
        </main>
    )
};