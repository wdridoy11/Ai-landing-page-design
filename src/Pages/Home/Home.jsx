import React from 'react'
import Steps from './Steps'
import Invoice from './Invoice'
import Business from './Business'
import Hero from './Hero'
import Service from './Service'
import Client from './Client'

const Home = () => {
  return (
    <div>
        <Hero />
        <Business />
        <Invoice />
        <Steps />
        <Client />
        <Service />
    </div>
  )
}

export default Home