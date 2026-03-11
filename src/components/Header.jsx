import React from 'react'
import './styles/Header.scss'
import { headerData } from '../util/header'
import Nav from './Nav'
import Util from './Util'
import Mnav from './Mnav'

const Header = ({ mNavOpen, onNavOpen, onNavClose }) => {
  const headerLogo = headerData.logo
  return (
    <header>
    <div className='inner'>
      <a href="#" className="mob-nav-btn"
          onClick={(e)=>{
            e.preventDefault()
            onNavOpen()
          }}
        >
          <img src="/kia-file/icon_ham_w.png" alt="메뉴열기" />
        </a>
        <Nav/>
        <h1 className='tit'>
          <a href={headerLogo.href}><img src={headerLogo.src} alt={headerLogo.alt}/></a>
        </h1>
        <Util/>
    </div>
    {mNavOpen && <Mnav  onNavClose={onNavClose}/>}
    </header>
  )
}

export default Header