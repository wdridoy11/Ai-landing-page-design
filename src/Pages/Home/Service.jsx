import React from 'react'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div className='bg-white dark:bg-body py-20'>
        <div className='ai-container'>
            <div className='flex items-center justify-between effect-btn p-20'>
                <div>
                    <h1 className='text-5xl font-semibold mb-3 text-white'>Let’s try our service now!</h1>
                    <p className='text-slate-300 text-lg mb-8 w-full lg:w-2/3'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
                <div>
                  <Link className='ai-button ai-btn' to={'/'}>Get Start</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service