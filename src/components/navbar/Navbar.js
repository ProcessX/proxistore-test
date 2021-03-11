import React from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
    { to: '/', text: 'Home' },
    { to: '/campaigns', text: 'Campaigns' },
    { to: '/help', text: 'Help' },
]

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className={'test'}>
                    {LINKS.map((link) => (
                        <li key={link.to}>
                            <Link to={link.to}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
