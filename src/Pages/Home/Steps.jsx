import React from 'react'
import StepsImage from '../../Assets/Steps.png'
import { Link } from 'react-router-dom'
const Steps = () => {
  return (
    <div className='bg-white dark:bg-body py-20'>
        <div className='ai-container'>
            <div className='items-center grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10'>
                <div>
                  <h1 className='text-5xl font-semibold mn-2 heading-text-mood leading-[60px] mb-8'>Find a better card deal in few easy steps.</h1>
                  <p className='text-mood text-lg mb-8'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                  <Link className='ai-button ai-btn' to={'/'}>Get Start</Link>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={StepsImage} alt="Steps Image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps