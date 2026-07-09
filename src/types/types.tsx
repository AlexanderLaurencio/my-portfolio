export interface Skill{
    id: number,
    title: string,
    url: string
};

export interface ProjectType{
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