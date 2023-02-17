import React from 'react'
import Image from 'next/image'
import { AiFillCheckCircle } from 'react-icons/ai'
import { PROJECTS } from '../interfaces/constants'
import { useRouter } from "next/router";

const Projects = () => {
    const router = useRouter()
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Projects
                </p>
                <h2 className='py-4'>What I have built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {
                        PROJECTS.map((project, index: number) => (
                        <div 
                            key={index}
                            className='relative flex flex-col py-3 items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'
                        >
                            <Image className='rounded-xl group-hover:opacity-10' src='/assets/banner.jpg' width='200' height='200' alt='/'/>
                            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                <h3 className='text-2xl text-white tracking-wider text-center'>{project.projectName}</h3>
                                {/* <p className='mb-4'>{project.overview}</p> */}
                                <div className='flex flex-wrap gap-1 mb-4'>
                                    {project.technologies.map((tech, tIndex:number) => (
                                        <div key={tIndex} className='flex items-center gap-2 flex-1 font-medium'>
                                            <div>
                                                <AiFillCheckCircle size={20} color='#000' />
                                            </div>
                                            <span>{tech}</span>                                        
                                        </div>                                    
                                    ))}
                                </div>
                            </div>
                            <div className='flex justify-center sm:justify-start cursor-pointer mt-4'>
                                <button 
                                    className='px-4 py-2 rounded-full cursor-pointer'
                                    onClick={()=>{
                                        router.push(`/project/${project.projectId}`)
                                    }}
                                >
                                    View Detail
                                </button>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects