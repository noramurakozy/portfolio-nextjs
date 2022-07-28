import React from 'react'
import Image from 'next/image'
import AboutImg from '../public/assets/about.jpg'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-blue-purple'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>// I am not your normal developer</p>
                <p className='py-2 text-gray-600'>About me 1</p>
                <p className='py-2 text-gray-600'>About me 2</p>
                <p className='py-2 text-gray-600'>Check out my latest projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={AboutImg} className='rounded-xl' alt="Photo of a laptop"/>
            </div>
        </div>
    </div>
  )
}

export default About