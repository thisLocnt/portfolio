import Head from "next/head";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { Project, PROJECTS, FULL_NAME } from "../../../utils/constants";

interface PropertyProps {
    project: Project
}

const Property = ({ project }: PropertyProps) => {
    const handleRedirect = (pathname: string) => {
        if (!pathname) return;
        window.open(pathname, '_blank')
    }

    return (
        <>
            <Head>
                <title>{FULL_NAME} | {project.projectName}</title>
                <meta name="author" content={FULL_NAME} />
                <meta property="og:title" content={`Nguyen Tien Loc | ${project.projectName}`} />
                <meta name='description' content={project.showDescription} />
                <meta property="og:description" content={project.showDescription} />
                <meta property="og:url" content={`${process.env.ROOT_URL}/project/${project.projectId}`} />
                <meta property='og:image' content={`${process.env.ROOT_URL}${project.thumbnail}`} />
            </Head>
            {
                project ?
                    <div className="w-full mt-[6rem]">
                        <div className="w-screen h-[30vh] relative">
                            <div className="absolute top-0 left-0 w-full h-[30vh]  bg-black/80 z-10 ">
                                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
                                    <h2 className="py-2 text-style-blue">Project {project.projectName}</h2>
                                    <h3 className="text-style-red">
                                        {project.mainTech.join(' - ')}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-[1240px] mx-auto p-2 gap-x-2 flex flex-col md:flex-row items-center">
                            <div className="items-stretch w-[80%]">
                                {/* <p>Project {project.projectName}</p> */}
                                <h2 className="whitespace-pre-line">Overview</h2>
                                <p className="mb-4">
                                    {project.overview}
                                </p>
                                <h3 className='mb-2'>Experience gained</h3>
                                <div className='mb-4'>
                                    {
                                        project.experience ? project.experience :
                                            <>
                                                {
                                                    project.experienceObject.map((exp, index) => (
                                                        <p key={index}>
                                                            <span className='text-[#FF3399]'>{exp.name}</span>{' '}
                                                            <span>{exp.content}</span>
                                                        </p>
                                                    ))
                                                }
                                            </>
                                    }
                                </div>
                                {/* {
                                    project.linkDemo ? (
                                        <a
                                            href={project.linkDemo}
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <button className={`px-8 py-2 mt-4 mr-8 `}>Demo</button>
                                        </a>
                                    ) : (
                                        <button className={`px-8 py-2 mt-4 mr-8 cursor-default`}>Demo</button>
                                    )
                                }
                                {
                                    project.linkRepo ? (
                                        <a
                                            href={project.linkRepo}
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <button className={`px-8 py-2 mt-4 `}>Code</button>
                                        </a>
                                    ) :
                                        (
                                            <button className={`px-8 py-2 mt-4 cursor-default`}>Code</button>
                                        )
                                } */}
                                <button
                                    className={`px-8 py-2 mt-4 mr-8 ${!project.linkDemo ? 'cursor-not-allowed opacity-50' : ''}`}
                                    onClick={() => handleRedirect(project.linkDemo)}
                                >
                                    Demo
                                </button>
                                <button
                                    className={`px-8 py-2 mt-4 ${!project.linkRepo ? 'cursor-not-allowed opacity-50' : ''}`}
                                    onClick={() => handleRedirect(project.linkRepo)}
                                >
                                    Code
                                </button>
                            </div>
                            <div className='col-span-4 md:col-span-1 shadow-xl flex-1 shadow-gray-400 rounded-xl py-4'>
                                <div className='p-2'>
                                    <p className='text-center font-bold pb-2'>Technologies</p>
                                    {/* <div className='grid grid-cols-3 md:grid-cols-1'>
                                    {project.technologies.map((tech, tIndex) => (
                                        <p key={tIndex} className='text-gray-600 py-2 flex items-center'>
                                            <RiRadioButtonFill className='pr-1' /> {tech}
                                        </p>

                                    ))}
                                </div> */}
                                    <div className='flex flex-wrap gap-x-4 justify-center'>
                                        {
                                            project.technologies.map((tech, index) => (
                                                <p key={index} className='text-gray-600 py-2 flex items-center text-lg'>
                                                    <RiRadioButtonFill color={index % 2 ? '#FF3399' : '#0099FF'} className='pr-1' /> {tech}
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                    </Link> */}
                        </div>
                    </div> : ''
            }
        </>
    );
};

export default Property;

export const getServerSideProps = (context: any) => {
    const { projectId } = context.params
    if (!projectId) return;

    const index = PROJECTS.findIndex(p => p.projectId == projectId)
    if (index < 0) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            project: PROJECTS[index]
        }
    }
}
