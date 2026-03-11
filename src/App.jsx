import { useState, useEffect } from 'react'
import './styles/main.scss'
import Hero from './sections/Hero'
import Header from './components/Header'
import TopBanner from './components/TopBanner'
import Brand from './sections/Brand'
import Collection from './sections/Collection'
import WhyKia from './sections/WhyKia'
import Instargram from './sections/Instargram'
import Footer from './components/Footer'
import FixedTopBtn from './components/FixedTopBtn'

function App() {
  const [topBanner, setTopBanner] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)


  const [mNavOpen, setMNavOpen] = useState(false)

  const handleMNavOpen = () => setMNavOpen(true)
  const handleMNavClose = () => setMNavOpen(false)

  useEffect(() => {
    document.body.style.overflow = mNavOpen ? 'hidden' : ''
  }, [mNavOpen])
  
  const onClickCloseBtn = () => {
    setTopBanner('up')
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100)
    }
    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className={`app-container ${topBanner} ${isScrolled ? 'scrolled' : ''}`}>
      <FixedTopBtn />
      <TopBanner onClick={onClickCloseBtn} />
      <Header
        mNavOpen={mNavOpen}
        onNavOpen={handleMNavOpen}
        onNavClose={handleMNavClose}
      />
      <main>
        <section id='hero' className='section'><Hero /></section>
        <section id='brand' className='section'><Brand /></section>
        <section id='collection' className='section'><Collection /></section>
        <section id='whykia' className='section'><WhyKia /></section>
        <section id='instargram' className='section'><Instargram /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
