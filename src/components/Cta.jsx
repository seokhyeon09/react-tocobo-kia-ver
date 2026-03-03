import React from 'react'
import { categories } from '../util/cta'
const Cta = () => {
    return (
        <div className='cta inner'>
            <ul className="cta-list">
                {categories.map((c, i) => (
                    <li key={c.id}>
                        <a href={c.href}>
                            <div className="img-wrap" style={{ backgroundImage: `url(${c.img.src})` }}>
                            </div>
                            <p>
                                {c.name}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cta
