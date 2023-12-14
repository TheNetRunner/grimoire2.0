export interface Skill {
    name: string;
}

export interface SkillGroup {
    name: string;
    skills: Skill[];
}