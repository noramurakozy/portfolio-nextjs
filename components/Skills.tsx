import React from 'react'
import Image from 'next/image'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='sub-header'>Skills</p>
            <h2 className='py-4'>What Can I Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <SkillCard imgPath='/../public/assets/skills/html.png' imgAlt='Html logo' label='HTML'/>
                <SkillCard imgPath='/../public/assets/skills/css.png' imgAlt='CSS logo' label='CSS'/>
                <SkillCard imgPath='/../public/assets/skills/javascript.png' imgAlt='JS logo' label='JavaScript'/>
                <SkillCard imgPath='/../public/assets/skills/tailwind.png' imgAlt='Tailwind logo' label='Tailwind'/>
                <SkillCard imgPath='/../public/assets/skills/nextjs.png' imgAlt='Next.js logo' label='Next.js'/>
                <SkillCard imgPath='/../public/assets/skills/github1.png' imgAlt='Github logo' label='GitHub'/>
                <SkillCard imgPath='/../public/assets/skills/react.png' imgAlt='React logo' label='React'/>
                <SkillCard imgPath='/../public/assets/skills/firebase.png' imgAlt='Firebase logo' label='Firebase'/>
            </div>
        </div>
    </div>
  )
}

export default Skills