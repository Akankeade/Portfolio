import React from 'react'
import Props1 from './Props1';
import { FaBlackTie } from 'react-icons/fa';
import { MdWork } from 'react-icons/md'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { resumeData } from './ResumeData';
import './Resume.css'

const Resume = () => {
  return (
    <section className='resume' id='resume'>

      <Props1
        headerText='My Resume'
        icon={<FaBlackTie size={40} />}
      />

      <div className='resume-content'>
        <div className="experience-content">
          <h3 className='experience-text'>Experience And Education</h3>
          <VerticalTimeline
            layout='1-column'
            lineColor='var(--yellow-theme-main-color)'

          >
            {
              resumeData.experience.map((item) => (
                <VerticalTimelineElement
                  key={item}
                  className='experience-timeline'
                  contentStyle={{
                    background: 'none',
                    color: 'var(--yellow-theme-main-color)',
                    border: '1.5px solid var(--yellow-theme-main-color)'
                  }}
                  iconStyle={{
                    background : '#181818',
                    color : 'var(--yellow-theme-main-color)'
                  }}
                  icon={<MdWork />}
                  dateClassName='vertical-customdate'
                >
                  <div className='vertical-titlecontent'>
                    <h4 className='vertical-subTitle'>{item.subtitle}</h4>
                    <h4>{item.degree}</h4>
                  </div>
                  <p>{item.description}</p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>

      </div>
    </section>
  )
}

export default Resume