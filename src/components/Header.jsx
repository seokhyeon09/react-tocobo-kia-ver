import React from 'react'
import './styles/Header.scss'
import TopBanner from './TopBanner'
const Header = () => {
  return (
    <header>
    <div className='inner'>
        <TopBanner/>
    </div>
    </header>
  )
}

export default Header