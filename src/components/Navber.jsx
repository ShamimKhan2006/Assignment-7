import Link from 'next/link';
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';

const Navber = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center mt-5 border-b border-b-gray-100 pb-4'>
            <h1 className='text-2xl'><span className='font-bold text-2xl'>Keen</span> Keaper</h1>
            <div className='flex gap-4 text-[#7c899d]'>
                
                   <div className='flex gap-2 items-center'>
                    <AiOutlineHome/>
                   <Link href={"/"}>  <button></button></Link>
                   <Link href={'home'}>  <button> Home</button></Link>
                   </div>
                   <div className='flex gap-2 items-center'>
                    <RiTimeLine></RiTimeLine>
                     <Link><button> TimeLine</button></Link>
                   </div>
                   <div className='flex gap-2 items-center'>
                     <TfiStatsUp></TfiStatsUp>
                     <Link><button>Stats</button></Link>
                   </div>
                   
                
            </div>
        </div>
    );
};

export default Navber;