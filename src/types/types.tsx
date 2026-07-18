export interface Skill{
    id: number,
    title: string,
    url: string
};

export type SkillsArray = {
    skills: Skill[]
}

export interface SkillsObject {
    [prop: string]: Skill
}

export interface ProjectType {
    id: number,
    name: string,
    description: string,
    image: string,
    linkRepo: string,
    siteLink: string,
    skills: Skill[]
};

export interface ContactType{
    contactType: string,
    image: string,
    url: string
};