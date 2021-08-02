import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {
    return (
        <nav>
            <ul className="menu-items">
               <li className="menu-item"><Link to='/'>Home</Link></li>
               <li className="menu-item"><Link to='/market'>Market Place</Link></li>
               <li className="menu-item"><Link to='/wallet'>Wallet Balance</Link></li>
               <li className="menu-item"><Link to='/drops'>Drops</Link></li>
               <li className="menu-item"><Link to='/account'>Accounts</Link></li>

            </ul>
        </nav>
    )
}

export default Menu
