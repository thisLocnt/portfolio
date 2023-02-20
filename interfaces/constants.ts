export const JOB_TITLE = 'Front-End Developer'
export const FULL_NAME = 'Nguyen Tien Loc'

export const SELF_INTRODUCE = 'I have been working as a Frontend Developer for a year and have experience developing websites and apps, and implementing them on various projects, ranging from small landing pages to big projects.I primarily specialize in utilizing ReactJS and NextJS.'

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
        thumbnail: '',
        mainTech: ['ReactJS', 'Mongoose', 'Material UI', ],
        overview: 'Responsive Movie Website with MERN stack and Themoviedb',
        technologies: ['ReactJS', 'Redux toolkit', 'Material UI', 'SwiperJS', 'Formik', 'Yup', 'Express rest api', 'Express validator ', 'JWT' ],
        linkDemo: '',
        linkRepo: 'https://github.com/LOCNg0114/MERN_Movie_Web_2023',
    },
    {
        projectId: 2,
        projectName: 'Nextjs Blog App',
        thumbnail: '/assets/projects/blog-app.jpg',
        mainTech: ['Nextjs', 'TypeScript', 'Tailwind CSS'],
        overview: 'This is a personal Blog page represented by a Next.js application .',
        technologies: ['NextJS', 'TypeScript','Tailwind CSS', 'SWR', 'SwiperJS', 'Axios'],
        linkDemo: 'https://nextjs-blog-app-keuc.vercel.app',
        linkRepo: 'https://github.com/LOCNg0114/Nextjs-Blog-App',
    },
    {
        projectId: 3,
        projectName: 'Nodemailer Email',
        thumbnail: '',
        mainTech: ['ReactJS', 'Express', 'Nodemailer'],
        overview: 'Send Mail with Nodemailer Using Node.js Backend',
        technologies: ['ReactJS', 'Express', 'Nodemailer', 'Nodemon'],
        linkDemo: '',
        linkRepo: 'https://github.com/LOCNg0114/Nodemailer_Gmail',
    },
]