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
                <ul className={'link__li'}>
                    {LINKS.map((link) => (
                        <li key={link.to} className={'link__el'}>
                            <Link to={link.to} className={'link'}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
