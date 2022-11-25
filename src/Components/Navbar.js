import React from 'react';
import { Link } from 'react-router-dom'
import { FaReact, FaBars } from 'react-icons/fa'
import { HiX} from 'react-icons/hi'
import { navMenus } from './config';
import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <div>
            <nav className='navbar'>
                <div className='nav-container'>
                    <Link to='/' className='nav-logo'>
                        <FaReact size={30} />
                    </Link>

                    <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                        {
                            navMenus.map((item, key) => (
                                <li key={key} className='navbar-item'>
                                    <Link to={item.to} className="navbar-links">
                                        {item.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className='nav-icon' onClick={handleClick}>
                        {
                            click ? <HiX size={30}/> : <FaBars size={30}/>
                        }
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar