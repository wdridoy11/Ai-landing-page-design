import React from 'react'
import Steps from './Steps'
import Invoice from './Invoice'
import Business from './Business'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
        <Hero />
        <Business />
        <Invoice />
        <Steps />
    </div>
  )
}

export default Home