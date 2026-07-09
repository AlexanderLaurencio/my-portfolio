import "./hero.modules.css"

export default function HeroSkeleton() {
    return(
        <div className="heroSkeleton">
                    <div className="heroSkeletonTextContainer">
                        <div className="heroSkeleton_title"></div>
                        <div className="heroSkeleton_paragraph"></div>
                        <div className="heroSkeleton_subtitle"></div>
                    </div>
                   <div className="heroSkeleton_image"></div>
                    <div className="heroSkeleton_skillsSection">
                        <div className="heroSkeleton_skillsSection_title"></div>
                        <div className="heroSkeleton_skillsWrapper">
                            <div className="skillSkeleton"></div>
                            <div className="skillSkeleton"></div>
                            <div className="skillSkeleton"></div>
                            <div className="skillSkeleton"></div>
                            <div className="skillSkeleton"></div>
                            <div className="skillSkeleton"></div>
                        </div>
                    </div>
                </div>
    )
};