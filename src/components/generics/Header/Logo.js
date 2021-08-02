import React from 'react'
import logoPic from '../../assets/icons/logo.png'
import './Logo.scss'

const Logo = () => {
    return (
        <div className='logo'>
            <div className='logo-pic'>
                <img src={logoPic} alt="logo pic" />
            </div>
            <h2 className='logo-text'>NFT HISTORY</h2>
        </div>
    )
}

export default Logo
