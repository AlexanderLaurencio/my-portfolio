import { ProjectType } from "@/types/types";
import Image from "next/image";
import SkillsWrapper from "../skillsWrapper/SkillsWrapper";
import filterSkills from "@/utils/filterSkills";
import "./project.modules.css"

export default function Project(project: ProjectType) {
    return(
        <article className="project">
            <h3 className="project_name">{project.name}</h3>
            <Image
            title={project.name}
            alt={project.name}
            src={project.image}
            width={1360}
            height={650}
            />
            <a target="blank" href={project.siteLink} className="projectButton_link">
                site <Image 
                title="link"
                alt="link"
                src="/icons/link-white.svg"
                width="30"
                height="30"
                />
            </a>
            <a target="blank" href={project.linkRepo} className="projectButton_repo">
                repo <Image 
                title="github"
                alt="github"
                src="/icons/github.svg"
                width="30"
                height="30"
                />
            </a>
            <p className="project_description">
                {project.description}
            </p>
            <SkillsWrapper skills={project.skills} />
        </article>
    )
};