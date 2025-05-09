import React from 'react'
import ClientImage from '../../Assets/client.png'
const Client = () => {
  return (
    <div className='bg-white dark:bg-body py-10'>
        <div className='ai-container'>
            <div>
                <img src={ClientImage} alt="Client image" />
            </div>
        </div>
    </div>
  )
}

export default Client