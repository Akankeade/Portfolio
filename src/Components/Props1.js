import React from 'react'
import './props1.css'


const Props1 = (props) => {
    const {headerText, icon} = props;
  return (
    <div className='props-content'>
        <h2>{headerText}</h2>
        <span>{icon}</span>
    </div>
  )
}

export default Props1