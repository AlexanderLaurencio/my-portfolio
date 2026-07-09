import Image from "next/image";
import "./project.modules.css"

export default function ProjectSkeleton() {
    return(
        <article className="projectSkeleton">
            <h3 className="projectSkeleton_name"></h3>
            <div className="projectSkeleton_image"></div>
            <div className="projectSkeletonButton_link"></div>
            <div className="projectSkeletonButton_repo"></div>
            <div className="projectSkeleton_description"></div>
            <div className="projectSkeleton_skills">
                <div className="projectSkeleton"></div>
            </div>
        </article>
    )
};