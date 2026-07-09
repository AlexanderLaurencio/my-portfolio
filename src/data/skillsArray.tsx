import { Skill } from "@/types/types";

interface Skills {
    [prop: string]: Skill
};

export let skillsArray: Skills = {
    html:{
        id: 1,
        title: "HTML",
        url: "/icons/html.svg"
    },
    css:{
        id: 2,
        title: "CSS",
        url: "/icons/css.svg"
    },
    javascript:{
        id: 3,
        title: "JavaScript",
        url: "/icons/javascript.svg"
    },
    reactjs:{
        id: 4,
        title: "ReactJS",
        url: "/icons/reactjs.svg"
    },
    typescript:{
        id: 5,
        title: "TypeScript",
        url: "/icons/typescript.svg"
    },
    nextjs:{
        id: 6,
        title: "Nextjs",
        url: "/icons/nextjs.svg"
    }
};