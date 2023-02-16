
import Image from 'next/image'
import React from 'react'
import { SKILLS } from '../interfaces/constants'

const Skill = () => {
    return (
        <div id='skill' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4 '>What I can do</h2>
                
                <div className='flex gap-4 flex-wrap justify-between'>
                {
                    SKILLS.map((skill, index) => (
                        <div className='w-[100%] min-[320px]:w-[100%] lg:w-[22%] md:w-[30%] sm:w-[48%]  p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer' key={index}>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image className='h-[64px] object-contain' src={skill.thumbnail} alt='/' width='64' height='64' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-xl'>{skill.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Skill