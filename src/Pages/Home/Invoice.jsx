import React from 'react'
import InvoiceImage from '../../Assets/invoice.png';
import PlayStore from '../../Assets/play-store.svg';
import AppleStore from '../../Assets/apple-store.svg';

const Invoice = () => {
  return (
    <div className='bg-white dark:bg-body py-10'>
        <div className='ai-container'>
            <div className='items-center grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10'>
                <div className='flex items-center justify-center'>
                    <img src={InvoiceImage} alt="Invoice Image" />
                </div>
                <div>
                  <h1 className='text-5xl font-semibold mn-2 heading-text-mood leading-[60px] mb-8'>Easily control your billing & invoicing.</h1>
                  <p className='text-mood text-lg mb-8'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                  <div className='flex gap-10'>
                       <img src={AppleStore} alt="Apple Store" />
                       <img src={PlayStore} alt="Play Store" />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invoice