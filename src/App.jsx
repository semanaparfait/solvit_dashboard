import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Rates from './Rates.jsx'
import Producrs from './Producrs.jsx'
import Users from './Users.jsx'
import Aside from './Aside.jsx'
import Activities from './Activities.jsx'
import Action from './Action.jsx'
function App() {



  return (
<>
  <div className="md:flex">
      <Aside />
    <div className="md:ml-64 md:flex-1 px-2">
      <Navbar />
      <Hero />
      <Rates />
      <Producrs />
      <Users />
      <div className='flex gap-4 flex-wrap  justify-center'>

      <Activities/>
      <Action/>
      </div>
    </div>
  </div>
  
</>

  )
}

export default App
