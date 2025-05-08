import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Logo.svg';
import { CiLight } from 'react-icons/ci';
import { FaMoon } from 'react-icons/fa';
const Header = () => {

    // Ligt and Dark Mode style
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
          return localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
              window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
      });

      useEffect(() => {
        if (darkMode) {
          document.querySelector('html').setAttribute('data-theme', 'dark');
          document.documentElement.classList.add('dark');
          localStorage.theme = 'dark';
        } else {
          document.querySelector('html').setAttribute('data-theme', 'light');
          document.documentElement.classList.remove('dark');
          localStorage.theme = 'light';
        }
      }, [darkMode]);

      const toggleTheme = () => {
        setDarkMode(!darkMode);
      };


  return (
    <div className='bg-white dark:bg-black mb-20 py-5'>
        <div className='ai-container'>
            <div className='flex justify-between items-center'>
                <div>
                    <Link to={'/'}>
                        <img className='w-3/5' src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <Link to={'/'} className='header'>Home</Link>
                        <Link to={'/'} className='header'>About</Link>
                        <Link to={'/'} className='header'>Features</Link>
                        <Link to={'/'} className='header'>Solution</Link>
                        {/* Dark and light mode toggle button */}
                        <button onClick={toggleTheme} className='cursor-pointer'>
                            {darkMode ?<CiLight className='text-white text-xl'/> : 
                                <FaMoon className='text-white text-xl'/>}
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header