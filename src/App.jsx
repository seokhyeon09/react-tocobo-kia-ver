import { useState, useEffect } from 'react'
import './styles/main.scss'
import Hero from './sections/Hero'
import Header from './components/Header'
import TopBanner from './components/TopBanner'
import Brand from './sections/Brand'
import Collection from './sections/Collection'
import WhyKia from './sections/WhyKia'
import Instargram from './sections/Instargram'

function App() {
  const [topBanner, setTopBanner] = useState('')
  const [isScrolled, setIsScrolled]=useState(false)

  const onClickCloseBtn=()=>{
    setTopBanner('up')
  }

  useEffect(()=>{
    const handleScroll = () =>{
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop>100)
    }
    window.addEventListener('scroll',handleScroll)
  },[])
  return (
    <div className= {`app-container ${topBanner} ${isScrolled? 'scrolled':''}`}>
      <TopBanner onClick ={onClickCloseBtn}/>
      <Header/>
      <main>
        <section id='hero' className='section'><Hero /></section>
        <section id='brand' className='section'><Brand /></section>
        <section id='collection' className='section'><Collection /></section>
        <section id='whykia' className='section'><WhyKia /></section>
        <section id='instargram' className='section'><Instargram /></section>
        {/* <section id='review' className='section'><Review /></section> */}
      </main>
    </div>
  )
}

export default App
