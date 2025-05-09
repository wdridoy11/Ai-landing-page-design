import React from 'react'
import Steps from './Steps'
import Invoice from './Invoice'
import Business from './Business'
import Hero from './Hero'
import Service from './Service'
import Client from './Client'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
        <Hero />
        <Business />
        <Invoice />
        <Steps />
        <Testimonial />
        <Client />
        <Service />
    </div>
  )
}

export default Home