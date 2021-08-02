import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {
    return (
        <nav>
            <ul className="menu-items">
               <li className="menu-item"><Link to='/'></Link></li>
               <li className="menu-item"><Link to='/market'></Link></li>
               <li className="menu-item"><Link to='/wallet'></Link></li>
               <li className="menu-item"><Link to='/drops'></Link></li>
               <li className="menu-item"><Link to='/account'></Link></li>

            </ul>
        </nav>
    )
}

export default Menu
