import React from 'react'
import { headerData } from '../util/header'

const Nav = () => {
    const haderNav = headerData.header.menu
    return (
        <ul className='nav-list'>
            {haderNav.map((nav) => (
                <li key={nav.id}>
                    <a
                        href={`${nav.href}`}
                    >{nav.label}</a>
                </li>
            ))}
        </ul>
    )
}

export default Nav
