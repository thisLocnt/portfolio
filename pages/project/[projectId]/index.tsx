import Head from "next/head";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { Project, PROJECTS } from "../../../interfaces/constants";

interface PropertyProps {
    project: Project
}

const Property = ({project}: PropertyProps) => {
    return (
        <>
            <div className="w-full mt-[6rem]">
                <Head>
                    <title>Nguyen Tien Loc | {project.projectName}</title>
                    <meta name="author" content="Nguyen Tien Loc" />
                    <meta name="description" content="" />
                </Head>
                <div className="w-screen h-[30vh] relative">
                    <div className="absolute top-0 left-0 w-full h-[30vh]  bg-black/80 z-10 ">
                        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
                            <h2 className="py-2 text-style-blue">{}</h2>
                            <h3 className="text-style-red">
                                {project.mainTech.join(' - ')}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1240px] mx-auto p-2 gap-x-2 flex flex-col md:flex-row items-center">
                    <div className="items-stretch w-[80%]">
                        <p>Project {project.projectName}</p>
                        <h2>Overview</h2>
                        <p className="mb-4">{project.overview}</p>
                            <button
                                className={`px-8 py-2 mt-4 mr-8` } 
                            >
                            Demo
                            </button>
                            <button
                                className={`px-8 py-2 mt-4 `}                    
                            >
                            Code
                        </button>
                    </div>
                    <div className='col-span-4 md:col-span-1 shadow-xl flex-1 shadow-gray-400 rounded-xl py-4'>
                        <div className='p-2'>
                            <p className='text-center font-bold pb-2'>Technologies</p>
                            <div className='grid grid-cols-3 md:grid-cols-1'>
                                {project.technologies.map((tech, tIndex) => (
                                    <p key={tIndex} className='text-gray-600 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> {tech}
                                    </p>

                                ))}
                            </div>
                        </div>
                    </div>
                {/* <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
                </Link> */}
                </div>
            </div>
        </>
    );
};

export default Property;

export const getServerSideProps = (context: any) =>{
    const {projectId} = context.params
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
        props:{
            project: PROJECTS[index]
        }
    }
}
