export const JOB_TITLE = 'Front-End Developer'
export const FULL_NAME = 'Nguyen Tien Loc'

export const SELF_INTRODUCE = `I have over 1.5 years of experience in developing websites and apps as a <i>Frontend Developer</i>, and implementing them on various projects, ranging from small landing pages to big projects.<br/> I primarily specialize in utilizing <b>ReactJS</b> and <b>Next.js</b>.`

export const ERR_MSG = {
    required: 'Field is required'
}

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
    {
        thumbnail: '/assets/skills/mongoDB.png',
        name: 'MongoDB'
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
        experience: '',
        experienceObject: [
            {
                name: '- ReactJS:',
                content: 'Build a Responsive Movie Website'
            },
            {
                name: '- React router v6',
                content: 'Implement Routing/Navigation using React Router'
            },
            {
                name: '- Express rest api / Express validator / Jsonwebtoken',
                content: 'Sign up / Sign in / Get API from Themoviedb'
            },
            {
                name: '- Mongoose',
                content: 'Save movie to Favorite list (Remove favorite item) / Build API, how to connect to the server'
            },
            {
                name: '- Material UI',
                content: 'Learn to use Material UI components and icons'
            },
            {
                name: '- Formik / Yup',
                content: 'Validate form data and response'
            },

        ],
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
        experienceObject: [
            {
                name: '- NextJS:',
                content: 'Build and understand how to make blog website using Next.js'
            },
            {
                name: '- SWR:',
                content: 'Learn the concept and application of SWR into the application to load the data'
            },
            {
                name: '- TailwindCSS:',
                content: 'Practice with this utility-first framework'
            },
        ],
        showDescription: 'Short description for Blog App'
    },
    {
        projectId: 3,
        projectName: 'Netflix Clone',
        thumbnail: '/assets/projects/netflix-clone.JPG',
        mainTech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Material UI', 'Firebase'],
        overview: 'This is a NETFLIX Clone that specializes in Server Side Rendering using Next.js, creating responsive user interfaces through the use of Tailwind CSS, and incorporating Typescript.',
        technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Material UI Icon', 'React Player', 'NextAuth', 'Firebase'],
        linkDemo: 'https://netflix-clone-locng0114.vercel.app/',
        linkRepo: 'https://github.com/LOCNg0114/netflix-clone',
        experience:'',
        experienceObject: [
            {
                name: '- Firebase',
                content: 'Email/Password Authentication inside of our App using Firebase Auth'
            },
            {
                name: '- Context API',
                content:'Implement shared state across our entire App using Context'
            },
            {
                name: '- Material UI',
                content: 'Learn to use Material UI components and icons'
            },
            {
                name: '- TailwindCSS:',
                content: 'Practice with this utility-first framework'
            },

        ],
        showDescription:'Short description for Netflix Website Clone'
    },
    {
        projectId: 4,
        projectName: 'Nodemailer Email',
        thumbnail: '/assets/projects/nodemailer.png',
        mainTech: ['ReactJS', 'Express', 'Nodemailer'],
        overview: 'Send Mail with Nodemailer Using Node.js Backend',
        technologies: ['ReactJS', 'Express', 'Nodemailer', 'Nodemon'],
        linkDemo: '',
        linkRepo: 'https://github.com/LOCNg0114/Nodemailer_Gmail',
        experience:'',
        experienceObject: [
            {
                name: '- NodeJS',
                content: 'Learn the concept and application of NodeJS in the project'
            },
            {
                name: '- Nodemailer',
                content: 'Nodemailer is useful to send mail with SMTP server, learn how to use it to send mail'
            },
        ],
        showDescription: 'Short description for Nodemailer Email'
    },
]