import React from 'react'
import Arrow from '../../Assets/arrow.svg';
import Testimonial_1 from '../../Assets/testimonial-1.png';
const Testimonial = () => {
  return (
    <div className='bg-white dark:bg-body py-20'>
        <div className='ai-container'>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5 md:gap-10'>
                    <div>
                        <h1 className='text-5xl font-semibold mb-3 leading-16 heading-text-mood lg:pr-10'>What people are saying about us</h1>
                    </div>
                    <div>
                        <p className='text-mood text-lg'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-10 pt-16'>
                    <div className='effect-btn p-10'>
                        <img className='' src={Arrow} alt="arrow" />
                        <p className='text-mood text-lg mt-5'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className='flex items-center gap-5 mt-5'>
                            <div>
                                <img src={Testimonial_1} alt="Testimonial" />
                            </div>
                            <div>
                                <h3 className='heading-text-mood text-lg'>Herman Jensen</h3>
                                <p className='text-sm text-mood'>Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                    <div className='effect-btn p-10'>
                        <img className='' src={Arrow} alt="arrow" />
                        <p className='text-mood text-lg mt-5'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className='flex items-center gap-5 mt-5'>
                            <div>
                                <img src={Testimonial_1} alt="Testimonial" />
                            </div>
                            <div>
                                <h3 className='heading-text-mood text-lg'>Herman Jensen</h3>
                                <p className='text-sm text-mood'>Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                    <div className='effect-btn p-10'>
                        <img className='' src={Arrow} alt="arrow" />
                        <p className='text-mood text-lg mt-5'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className='flex items-center gap-5 mt-5'>
                            <div>
                                <img src={Testimonial_1} alt="Testimonial" />
                            </div>
                            <div>
                                <h3 className='heading-text-mood text-lg'>Herman Jensen</h3>
                                <p className='text-sm text-mood'>Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Testimonial