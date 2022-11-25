import React from 'react'
import Props1 from './Props1';
import { GiSkills } from 'react-icons/gi';
import { skillsData } from './SkillsData';
import { Line } from 'rc-progress';
import './Skills.css'
import { AnimateKeyframes } from 'react-simple-animate';

const Skills = () => {
  return (
    <section className='skills' id='skills'>

      <Props1
        headerText='My Skills'
        icon={<GiSkills size={40} />}
      />

      <div className="skill-main">

        {
          skillsData.map((item, key) => (
            <div key={key} className='skill-innercontent'>
              
                <h3 className='skills-label'>{item.label}</h3>

                <div className='div'>
                  {
                    item.data.map((dataItem, index) => (
                      <AnimateKeyframes
                      play
                      duration={2}
                      keyframes = {['opacity : 1', 'opacity : 0']}
                      >
                      <div className='progressbar-content' key={index}>
                        <p>{dataItem.skillsName}</p>
                        <Line
                          percent={dataItem.percentage}
                          strokeWidth='2'
                          strokeColor='var(--yellow-theme-main-color)'
                          trailWidth='2'
                        />
                      </div>
                      </AnimateKeyframes>
                    ))
                  }

                </div>
               
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills