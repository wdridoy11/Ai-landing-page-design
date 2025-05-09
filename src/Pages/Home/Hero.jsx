import React from 'react'
import Cover from '../../Assets/cover.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { CiDiscount1 } from 'react-icons/ci';
const Hero = () => {
  return (
    <div className='bg-white dark:bg-body pt-32 pb-16 hero'>
      <div className='ai-container'>
        <div>
            <div className='mb-5'>
                <div className='flex items-center gap-2'>
                  <CiDiscount1 className='text-jaguar text-2xl font-bold' />
                  <p className='text-mood'>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
                </div>
            </div>
            <div className='relative w-7/12'>
                <div>
                    <h1 className='heading-text-mood text-7xl font-semibold leading-22'>The Next <br />
                    <span className='text-jaguar'>Generation</span> <br/>
                    Payment Method.</h1>
                </div>
                <div className='mt-10'>
                    <div className='w-32 h-32 rounded-full border-2 border-jaguar flex items-center justify-center absolute top-0 right-16'>
                      <Link className='text-lg heading-text-mood flex flex-col items-center justify-center'>
                          <MdArrowOutward className='text-2xl mb-2' />Get State
                      </Link>
                    </div>
                    <p className='text-mood text-lg mb-8 w-full lg:w-9/12'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                    We examine annual percentage rates, annual fees.</p>
                </div>
            </div>
            <div>
                <img className='absolute top-24 right-0 w-1/3' src={Cover} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero