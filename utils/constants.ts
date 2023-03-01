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

interface ExperienceObject{
    name: string;
    content: string;
}

export interface Project {
    projectId: number;
    projectName: string;
    thumbnail: string;
    mainTech: string[];
    overview: string;
    technologies: string[];
    linkDemo: string;
    linkRepo: string;
    experience: string;
    experienceObject: ExperienceObject[];
    showDescription?: string
}

export const PROJECTS: Project[] = [
    {
        projectId: 1,
        projectName: 'MERN Movie Website',
        thumbnail: '/assets/projects/reactjs-movie-website.JPG',
        mainTech: ['ReactJS', 'Mongoose', 'Material UI', ],
        overview: 'Fullstack Responsive React.js Movie Website with MERN stack and Themoviedb. Some features of this project: \n\r - Sign up / Sign in \n\r - Save movie to Favorite list (Remove favorite item)\n\r- Write review for movie (Delete review) \n\r- Search movies / tv series / people \n\r- Light / Dark theme',
        technologies: ['ReactJS', 'Redux toolkit', 'Material UI', 'SwiperJS', 'Formik', 'Yup', 'Express rest api', 'Express validator ', 'JWT' ],
        linkDemo: '',
        linkRepo: 'https://github.com/LOCNg0114/MERN_Movie_Web_2023',
        experience: 'Evaluating front-end technologies (libraries, dependencies). this improves the performance of the application during use. Reviewing Code & support teammate during work. it makes the code cleaner and conforms to the convention. Working directly with the Product Owner and Design Team to define the product roadmap.',
        experienceObject: [],
        showDescription: 'Short description for Movie Website'
    },
    {
        projectId: 2,
        projectName: 'Next.js Blog App',
        thumbnail: '/assets/projects/blog-app.jpg',
        mainTech: ['Next.js', 'TypeScript', 'TailwindCSS'],
        overview: 'This is a project developed for a personal blog, with static data and utilizing the getStaticProp method to render the information',
        technologies: ['NextJS', 'TypeScript','Tailwind CSS', 'SWR', 'SwiperJS', 'Axios'],
        linkDemo: 'https://nextjs-blog-app-keuc.vercel.app',
        linkRepo: 'https://github.com/LOCNg0114/Nextjs-Blog-App',
        experience:'',
        experienceObject: [],
        showDescription: 'Short description for Blog App'
    },
    {
        projectId: 3,
        projectName: 'Netflix Clone',
        thumbnail: '/assets/projects/netfilix-clone.JPG',
        mainTech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Material UI', 'Firebase'],
        overview: 'This is a NETFLIX Clone that specializes in Server Side Rendering using Next.js, creating responsive user interfaces through the use of Tailwind CSS, and incorporating Typescript.',
        technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Material UI', 'React Player', 'NextAuth', 'Firebase'],
        linkDemo: 'https://netflix-clone-locng0114.vercel.app/',
        linkRepo: 'https://github.com/LOCNg0114/netflix-clone',
        experience:'',
        experienceObject: [],
        showDescription:'Short description for Netflix Website Clone'
    },
    {
        projectId: 4,
        projectName: 'Nodemailer Email',
        thumbnail: '',
        mainTech: ['ReactJS', 'Express', 'Nodemailer'],
        overview: 'Send Mail with Nodemailer Using Node.js Backend',
        technologies: ['ReactJS', 'Express', 'Nodemailer', 'Nodemon'],
        linkDemo: '',
        linkRepo: 'https://github.com/LOCNg0114/Nodemailer_Gmail',
        experience:'',
        experienceObject: [],
        showDescription: 'Short description for Nodemailer Email'
    },
]