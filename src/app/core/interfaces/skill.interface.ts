export interface Skill {
    id: number;
    title: string;
    srcImg: string;
    yearsExperience?: number;
    projectsInvolved?: number;
    description?: string;
    proficiencyLevel?: string;
    notableProjects?: string[];
    associatedTools?: string[];
    certifications?: string[];
    complementarySkills?: string[];
}