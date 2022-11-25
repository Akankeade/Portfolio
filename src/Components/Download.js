import React from 'react'
import './Download.css'

const Download = () => {
    return (
        <section className='download' id='download'>
            <div className="personal">
                <h2>Medina Akanke</h2>
                <p>Coker Street, Lagos Nigeria.</p>
                <p>09097372104. akankeopeoluwa@gmail.com</p>
            </div>
            <hr />

            <div className="edu">
                <h2>EDUCATION</h2>
                <div className="flex">
                    <li>Tom Caleb Schools</li>
                </div>
            </div>

            <div className="edu">
                <div className='flex'>
                    <div>
                        <li>University of Ilorin, Ilorin Kwara state</li>
                        <p>History and International Studies</p>
                    </div>
                    <p>2019 - till present</p>
                </div>
            </div>

            <div className="edu">
                <div className="flex">
                    <div>
                        <li>TechStudio Academy, Lagos State.</li>
                        <p>Full Stack Web Development</p>
                    </div>
                    <p>July - October 2022</p>
                </div>
            </div>

            <div className="skills">
                <div className="soft-skill">
                    <h2>SKILLS</h2>
                    <hr />
                    <ul>
                        <li>Built projects utilizing HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT, TAILWIND</li>
                        <li>Effective communication. Ability to communicate effectively and clearly, great listening capacity.</li>
                        <li>Openmindedness. Willingness to accept new ideas, thoughts and opportunities</li>
                        <li>Potential adaptive skills. Ability to adapt and be optimistic in light of new circumstances to reflect standard changes</li>
                        <li>Discipline</li>
                    </ul>
                </div>

            </div>

        </section>
    )
}

export default Download