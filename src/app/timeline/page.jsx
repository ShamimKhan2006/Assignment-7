
'use client'

import { MyContext } from '@/components/Context';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { IoCallOutline, IoVideocam, IoVideocamOffOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';

const TimeLinePage = () => { 
    const [value,setValue] = useContext(MyContext)




    return (
        <div className='mx-auto w-8/12 my-10'>
            <h1 className='text-4xl font-bold my-5'>TimeLine</h1>
            <div className='grid grid-row  gap-4'>
             
                 
                    {
                        value.map((item, ind) => <div className='bg-base-200 p-4 w-full rounded-md shadow flex gap-4' key={ind}>

                            <div>
                                {item.type === 'Call' && <IoCallOutline className='h-8 w-10 mt-2'></IoCallOutline>}
                                {item.type === 'Text' && <MdOutlineTextsms className='h-8 w-10 mt-2' ></MdOutlineTextsms>}
                                {item.type === 'Video' && <IoVideocamOffOutline className='h-8 w-10 mt-2'></IoVideocamOffOutline>}
                            </div>
                            <div className='grid grid-rows'>
                                <h1 className='font-semibold'>{item.type} with {item.name}</h1>
                            <p className='font-semibold'>{item.date} </p>
                            </div>
                        </div>)
                        
                    }
             


            </div>
        </div>
    );
}

export default TimeLinePage;

                  