import React from 'react';
import { BsFacebook } from 'react-icons/bs';

import { PiInstagramLogoFill } from 'react-icons/pi';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
    return (
          <div  className='bg-[#244d3f] w-full mt-20'>
            <div className='text-center text-white space-y-3 mt-15'>
                <h1 className=' font-bold text-4xl lg:font-boldtext-6xl pt-10'>Keen Keaper</h1>
                <p className=' px-2lg:px-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h2 className='text-3xl font-bold'>Socials Links</h2>
                    <div className='flex justify-center items-center gap-3 pb-20'>
                        <div className=' flex justify-center items-center'>
                              <PiInstagramLogoFill></PiInstagramLogoFill>
                        </div>
                        <BsFacebook /> 
                    <RiTwitterXFill />
                    </div>
                    
        
            
            </div>
            <p className='border-t border-t-gray-700 shadow-t w-[82%] mx-auto pb-10'></p>

            <div className='flex justify-between items-center  w-10/12 mx-auto pb-10'>
                <p className=' px-4 text-[#fafafa] lg:text-[#fafafa]'>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex justify-between items-center gap-4 text-[#fafafa]'>
                    <p>Privacy Policy </p>
                    <p> Terms of Service </p>
                    <p> Cookies</p>
                </div>
            </div>
          </div>
    );
};

export default Footer;