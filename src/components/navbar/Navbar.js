import React from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
    { to: '/', text: 'Home' },
    { to: '/campaigns', text: 'Campaigns' },
    { to: '/help', text: 'Help' },
]

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <nav className={'navbar__menu'}>
                <ul className={'tab__li'}>
                    {LINKS.map((link) => (
                        <li key={link.to} className={'tab__el'}>
                            <Link to={link.to} className={'tab'}>
                                <span className='tab__icon'>Icon</span>
                                <span className='tab__text'>{link.text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
