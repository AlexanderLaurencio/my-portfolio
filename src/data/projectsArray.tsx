import { ProjectType } from "@/types/types";
import filterSkills from "@/utils/filterSkills";

export let projectsArray: ProjectType[] = [
    {
        id: 0,
        name: "English Vocabulary App",
        description: "A responsive English vocabulary app built with React.js and IndexedDB featuring search and categorization.",
        image: "/images/EnglishVocabularyApp_screenshot.jpg",
        linkRepo: "https://github.com/AlexanderLaurencio/english-vocabulary-app",
        siteLink: "https://alexanderlaurencio.github.io/english-vocabulary-app/",
        skills: filterSkills(["html","css","javascript","reactjs"])
    },
    {
        id: 1,
        name: "Weather App",
        description: "A responsive weather application built with React.js that displays real-time weather conditions and forecasts for any city using a weather API",
        image: "/images/WeatherApp_screenshot.jpg",
        linkRepo: "https://github.com/AlexanderLaurencio/Weather-App",
        siteLink: "https://alexanderlaurencio.github.io/Weather-App/",
        skills: filterSkills(["html","css","javascript","reactjs"])
    },
    {
        id: 2,
        name: "Notes App",
        description: "A note-taking application built with TypeScript that allows users to create, edit, organize, and delete notes through a clean and intuitive interface",
        image: "/images/NotesApp_screenshot.jpg",
        linkRepo: "https://github.com/AlexanderLaurencio/notes-app",
        siteLink: "https://alexanderlaurencio.github.io/notes-app",
        skills: filterSkills(["html","css","javascript","reactjs","typescript"])
    },
] 