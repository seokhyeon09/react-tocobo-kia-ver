import React from 'react'
import { headerData } from '../util/header'

const Util = () => {
    const headerUtil = headerData.header.util
    return (
        <ul className='util-list'>
            {headerUtil.map((u) => (
                <li key={u.id}>
                    <a href={u.href}>
                        <img src={u.icon} alt="icon" />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Util
