import { SkillsArray } from "@/types/types";
import Image from "next/image";
import "./skillsWrapper.modules.css"


export default function SkillsWrapper(skills: SkillsArray) {
    return(
        <div className="skillsWrapper">
            {skills.skills.map(s => { 
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