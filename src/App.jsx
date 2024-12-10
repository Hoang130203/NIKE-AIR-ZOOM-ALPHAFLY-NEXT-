import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Timeline from './components/Timeline'
import Nike3DModel from './components/Nike3DModel'
import LandingPage from './components/NikeLandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black'>
      <LandingPage />
    </div>

  )
}

export default App
// <Header />
// <Nike3DModel />
// <Timeline />

// <ScamperSection />
// <UserPersona />
// <FutureIdeas />