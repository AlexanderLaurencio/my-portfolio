import { Skill } from "@/types/types";
import Image from "next/image";
import "./skillsWrapper.modules.css"

interface SkillsProp{
    skills: Skill[]
};

export default function SkillsWrapper({skills}: SkillsProp) {
    return(
        <div className="skillsWrapper">
            {skills.map(s => {
                return(
                    <Image 
                    key={s.id}
                    title={s.title}
                    alt={s.title}
                    src={s.url}
                    width="48"
                    height="48"
                    />
                )
            })}
        </div>
    )
};