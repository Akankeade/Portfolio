import React from 'react'
import Props1 from './Props1'
import { AiFillProject } from 'react-icons/ai'
import { filterOptions, portfolioData } from './PortData'
import './Portfolio.css'
import { useState } from 'react'

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <section id='portfolio' className='portfolio'>

      <Props1
        headerText='My Portfolio'
        icon={<AiFillProject size={40} />}
      />

      <div className="portfoli-content">

        <div className="portfolio-label">
          {
            filterOptions.map((option) => (
              <h2 key={`filter${option.id}`}>{option.label}</h2>
            ))
          }
        </div>

        <div className="portfolio-cards">
          {
            portfolioData.map((item, key) => (
              <div
                onMouseEnter={() => setHoveredIndex(key)}
                onMouseLeave={() => setHoveredIndex(null)}
                key={key} className="portfolio-cardsitem">

                <div className="portfolio-imgwrapper">
                 {/* eslint-disable-next-line */}
                  <a href='#'><img src={item.image} alt="project" /></a>
                </div>

                <div className="overlay">

                  {
                    hoveredIndex === key && (
                      <div className='portfolio-hover'>
                        <p>{item.projectName}</p>
                        <a href={item.projectLink}>View</a>
                      </div>
                    )
                  }

                </div>

              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Portfolio