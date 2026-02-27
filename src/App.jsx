import { useState } from 'react'
import './styles/main.scss'
import Hero from './sections/Hero'
import Header from './components/Header'
import TopBanner from './components/TopBanner'

function App() {
  const [topBanner, setTopBanner] = useState('')

  const onClickCloseBtn=()=>{
    setTopBanner('up')
  }
  return (
    <div>
      <TopBanner/>
      <Header/>
      <Hero/>
    </div>
  )
}

export default App
