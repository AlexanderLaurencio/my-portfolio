import { ProjectType } from "@/types/types"
import Project from "../project/Project"
import "./projects.modules.css"
import ProjectSkeleton from "../project/ProjectSkeleton"
import { Suspense } from "react"

interface ProjectsProp {
    projects: ProjectType[]
};

export default function Projects({ projects }: ProjectsProp) {
    return(
        <section className="projectsSection">
            <h2 className="projectsSection_title">Projects</h2>
            <div className="projectsContainer">
                {projects.map(p => <Suspense key={p.id} fallback={<ProjectSkeleton />}>
                        <Project 
                        id={p.id}key={p.id} 
                        name={p.name} image={p.image}
                        siteLink={p.siteLink}
                        linkRepo={p.linkRepo}
                        description={p.description}
                        skills={p.skills}
                        />
                    </Suspense>)}
            </div>
        </section>
    )
};