import React from 'react'
import Steps from './Steps'
import Invoice from './Invoice'
import Business from './Business'

const Home = () => {
  return (
    <div>
       <Business />
        <Invoice />
        <Steps />
    </div>
  )
}

export default Home