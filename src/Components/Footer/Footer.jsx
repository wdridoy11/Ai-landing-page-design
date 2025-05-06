import React from 'react'
import Logo from '../../Assets/Logo.svg';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <div className='bg-black py-20'>
            <div className='container mx-auto px-5'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {/* Footer Logo */}
                    <div>
                        <Link to={'/'}>
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <p>A new way to make the payments easy, reliable and secure.</p>
                    </div>
                    {/* Footer menu */}
                    <div>
                        <h3 className='text-xl text-white font-medium mb-4'>Usefull Links</h3>
                        <ul>
                            <Link to={'/'} className='block text-lg font-normal mb-2 text-slate-300 hover:underline hover:text-white duration-500'>Content</Link>
                            <Link to={'/'} className='block text-lg font-normal mb-2 text-slate-300 hover:underline hover:text-white duration-500'>How it Works</Link>
                            <Link to={'/'} className='block text-lg font-normal mb-2 text-slate-300 hover:underline hover:text-white duration-500'>Create</Link>
                            <Link to={'/'} className='block text-lg font-normal mb-2 text-slate-300 hover:underline hover:text-white duration-500'>Explore</Link>
                            <Link to={'/'} className='block text-lg font-normal mb-2 text-slate-300 hover:underline hover:text-white duration-500'>Terms & Services</Link>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl text-white font-medium mb-4'>Community</h3>
                        <ul>
                            <Link to={'/'} className='block text-lg font-normal mb-2 text-slate-300 hover:underline hover:text-white duration-500'>Help Center</Link>
                            <Link to={'/'} className='block text-lg font-normal mb-2 text-slate-300 hover:underline hover:text-white duration-500'>Partners</Link>
                            <Link to={'/'} className='block text-lg font-normal mb-2 text-slate-300 hover:underline hover:text-white duration-500'>Suggestions</Link>
                            <Link to={'/'} className='block text-lg font-normal mb-2 text-slate-300 hover:underline hover:text-white duration-500'>Blog</Link>
                            <Link to={'/'} className='block text-lg font-normal mb-2 text-slate-300 hover:underline hover:text-white duration-500'>Newsletters</Link>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl text-white font-medium mb-4'>Partner</h3>
                        <ul>
                            <Link to={'/'} className='block text-lg font-normal mb-2 text-slate-300 hover:underline hover:text-white duration-500'>Our Partner</Link>
                            <Link to={'/'} className='block text-lg font-normal mb-2 text-slate-300 hover:underline hover:text-white duration-500'>Become a Partner</Link>
                            <Link to={'/'} className='block text-lg font-normal mb-2 text-slate-300 hover:underline hover:text-white duration-500'>Affiliate</Link> 
                        </ul>
                    </div>

                </div>

                <div className='border-t border-slate-600 mt-7'>
                    <div className='flex justify-between items-center mt-10'>
                        <div>
                            <p className='text-slate-300 text-lg font-normal'>Copyright 2025 HooBank. All Rights Reserved.</p>
                        </div>

                        {/* social media */}
                        <div className='flex gap-8'>
                            <Link to={'/'}>
                                <FaFacebookF className='text-white text-2xl' />
                            </Link>
                            <Link to={'/'}>
                                <FaTwitter className='text-white text-2xl' />
                            </Link>
                            <Link to={'/'}>
                                <FaInstagram className='text-white text-2xl' />
                            </Link>
                            <Link to={'/'}>
                                <FaLinkedinIn className='text-white text-2xl' />
                            </Link>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer