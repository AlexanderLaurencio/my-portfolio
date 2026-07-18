import { skillsObject } from "@/data/skillsObject"
import { Skill } from "@/types/types"

export default function(skillsArrayParam: string[]) {
    let filteredSkillsArray: Skill[] = [];
    for (let i = 0; i < skillsArrayParam.length; i++) {
        let skill = skillsObject[`${skillsArrayParam[i]}`];
        if (skill) {
            filteredSkillsArray.push(skill);
        }
    }
    return filteredSkillsArray;
};