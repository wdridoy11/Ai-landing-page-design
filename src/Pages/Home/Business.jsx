import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { GrSecure } from 'react-icons/gr'
import { MdOutlineStar } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Business = () => {
  return (
    <div className='bg-white dark:bg-body py-20'>
        <div className='ai-container'>
            <div className='items-center grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10'>
                <div>
                    <h1 className='text-5xl font-semibold mn-2 heading-text-mood leading-[60px] mb-8'>You do the business, we’ll handle the money.</h1>
                    <p className='text-mood text-lg mb-8'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <Link className='ai-button ai-btn' to={'/'}>Get Start</Link>
                </div>
                <div>
                    <div className='flex justify-center gap-5 p-5'>
                        <div>
                            <MdOutlineStar className='text-jaguar text-4xl' />
                        </div>
                        <div>
                            <h3 className='heading-text-mood mb-2 text-lg font-semibold'>Rewards</h3>
                            <p className='text-mood text-lg'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                        </div>
                    </div>

                    <div className='flex justify-center gap-5 p-5 effect-btn mt-3'>
                        <div>
                            <GrSecure className='text-jaguar text-4xl' />
                        </div>
                        <div>
                            <h3 className='text-white mb-2 text-lg font-semibold'>100% Secured</h3>
                            <p className='text-slate-300 text-lg'>We take proactive steps make sure your information and transactions are secure.</p>
                        </div>
                    </div>

                    <div className='flex justify-center gap-5 p-5 mt-3'>
                        <div>
                            <FaTelegramPlane className='text-jaguar text-4xl' />
                        </div>
                        <div>
                            <h3 className='heading-text-mood mb-2 text-lg font-semibold'>Balance Transfer</h3>
                            <p className='text-mood text-lg'>A balance transfer credit card can save you a lot of money in interest charges.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Business