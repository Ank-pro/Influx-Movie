import './App.css'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { MidSection } from './components/mid-section/MidSection'

function App() {
 

  return (
    <div className='container'>
      <Header/>
      <MidSection/>
      <Footer/>
    </div>
  )
}

export default App
