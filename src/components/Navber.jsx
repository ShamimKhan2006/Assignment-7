'use client'
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';


const Navber = () => {
    const pathName=usePathname()
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center mt-5 border-b border-b-gray-100 pb-4'>
            <h1 className='text-[16px] lg:text-2xl'><span className='font-bold text-2xl'>Keen</span> Keaper</h1>
            <div className='flex gap-4 text-[#7c899d]'>
                
                   <div className={`flex gap-2 items-center text-gray-500 cursor-pointer btn ${pathName === '/'? ` bg-[#244d3f]`:``}`}>
                    <AiOutlineHome/>
                   <Link href={"/"}>  <button>Home</button></Link>
                 
                   </div>
                   <div className={`flex gap-2 items-center text-gray-500 cursor-pointer btn ${pathName === '/timeline'? ` bg-[#244d3f]`:``}`}>
                    <RiTimeLine></RiTimeLine>
                     <Link href={"/timeline"}><button> TimeLine</button></Link>
                   </div>
                   <div className={`flex gap-2 items-center text-gray-600 cursor-pointer btn ${pathName === '/stats'? ` bg-[#244d3f]`:``}`}>
                     <TfiStatsUp></TfiStatsUp>
                     <Link href={"/stats"}><button>Stats</button></Link>
                   </div>
                   
                
            </div>
        </div>
    );
};

export default Navber;