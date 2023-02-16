import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>Pellentesque finibus, purus non ullamcorper rhoncus, 
                        nibh eros pellentesque est, nec fermentum diam purus ut neque. 
                        Proin quis massa ullamcorper, tempor nisl eu, auctor nisl.
                        Fusce ac rutrum neque. Cras eget libero ut tellus ve
                        hicula dignissim eget sed ante. 
                    </p>
                    <p className='py-2 text-gray-600'>
                        Aenean ex ex, vehicula a facilisis eget, suscipit a eros. Quisque at sapien velit. 
                        Vestibulum pharetra magna id enim sollicitudin hendrerit. In ac commodo nulla, quis dignissim ex
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
                </div>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center hover:scale-105 ease-in duration-300rection'>
                <Image className='rounded-xl' src='/assets/cover.jpg' alt='/' width='300' height='300'/>
            </div>                
        </div>
    </div>
  )
}

export default About