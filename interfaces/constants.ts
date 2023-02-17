export const JOB_TITLE = 'Front-End Developer'
export interface Skill{
    thumbnail: string;
    name: string;
}

export const SKILLS: Skill[] = [
    {
        thumbnail: '/assets/skills/html5.png',
        name: 'HTML5'
    },
    {
        thumbnail: '/assets/skills/css3.png',
        name: 'CSS3'
    },
    {
        thumbnail: '/assets/skills/Nextjs.png',
        name: 'Next.js'
    },
    {
        thumbnail: '/assets/skills/reactjs.png',
        name: 'ReactJS'
    },
    {
        thumbnail: '/assets/skills/nodejs.png',
        name: 'NodeJS'
    },
    {
        thumbnail: '/assets/skills/mysql.png',
        name: 'MySQL'
    },
]

export interface Project {
    projectId: number;
    projectName: string;
    thumbnail: string;
    mainTech: string[];
    overview: string;
    technologies: string[];
    linkDemo: string;
    linkRepo: string;
    
}

export const PROJECTS: Project[] = [
    {
        projectId: 1,
        projectName: 'Movie Web App',
        thumbnail: '/assets/projects/cover04.png',
        mainTech: ['ReactJS', 'MongoDB'],
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae massa non lectus feugiat imperdiet vitae ac erat. Quisque aliquam venenatis leo, sit amet fermentum erat convallis nec. Phasellus pretium diam sed lectus blandit volutpat lacinia at lorem. ',
        technologies: ['ReactJS', 'Redux toolkit', 'Material UI'],
        linkDemo: '',
        linkRepo: '',
    },
    {
        projectId: 2,
        projectName: 'Landing Page',
        thumbnail: '/assets/projects/cover04.png',
        mainTech: ['Nextjs', 'MySQL'],
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae massa non lectus feugiat imperdiet vitae ac erat. Quisque aliquam venenatis leo, sit amet fermentum erat convallis nec. Phasellus pretium diam sed lectus blandit volutpat lacinia at lorem. ',
        technologies: ['NextJS', 'Material UI'],
        linkDemo: '',
        linkRepo: '',
    },
    {
        projectId: 3,
        projectName: 'Email Send',
        thumbnail: '/assets/projects/cover04.png',
        mainTech: ['NextJS', 'TypeScript'],
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae massa non lectus feugiat imperdiet vitae ac erat. Quisque aliquam venenatis leo, sit amet fermentum erat convallis nec. Phasellus pretium diam sed lectus blandit volutpat lacinia at lorem. ',
        technologies: ['ReactJS', 'Tailwind'],
        linkDemo: '',
        linkRepo: '',
    },
]