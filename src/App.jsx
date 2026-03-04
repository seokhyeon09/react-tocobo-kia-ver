import { useState } from 'react'
import './styles/main.scss'
import Hero from './sections/Hero'
import Header from './components/Header'
import TopBanner from './components/TopBanner'
import Brand from './sections/Brand'

function App() {
  const [topBanner, setTopBanner] = useState('')
  const [isScrolled, setIsScrolled]=useState(false)

  const onClickCloseBtn=()=>{
    setTopBanner('up')
  }
  return (
    <div className= {`app-container ${topBanner}`}>
      <TopBanner onClick ={onClickCloseBtn}/>
      <Header/>
      <main>
        <section id='hero' className='section'><Hero /></section>
        <section id='brand' className='section'><Brand /></section>
        {/* <section id='collection' className='section'><Collection /></section>
        <section id='skincare' className='section'><SkinCare /></section>
        <section id='instargram' className='section'><Instargram /></section> */}
        {/* <section id='review' className='section'><Review /></section> */}
      </main>
    </div>
  )
}

export default App
