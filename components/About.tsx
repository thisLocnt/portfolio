import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FULL_NAME, SELF_INTRODUCE } from '../interfaces/constants'
const About = () => {
  return (
    <div id='about'>
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>
                        My full name is <span className='text-[#FF3399] font-bold'>{FULL_NAME}</span>. 
                        I am a developer.
                    </p>
                    <p className='py-2 text-gray-600'>
                        {SELF_INTRODUCE}
                    </p>
                    <Link href='/#project'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>
                            Check out some of my latest projects
                        </p>
                    </Link>
                </div>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src='/assets/cover.jpg' alt='/' width='300' height='300'/>
            </div>                
        </div>
    </div>
  )
}

export default About