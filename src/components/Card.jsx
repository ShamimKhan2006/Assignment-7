import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({friend}) => {
    const { id,picture,name,days_since_contact,tags,status} =friend
    return (
            <Link className='block' href={`/home/${id}`}>
        <div>
            <div className='shadow p-4  rounded-lg gap-4  bg-base-200'>
                <div className='flex justify-center items-center '>
            <Image className='rounded-full object-cover w-20 h-20' src={picture} alt='picture' width={80} height={80}/> 
            </div>
               <div className='text-center'>
                 <h1 className='font-bold text-2xl'>{name}</h1>
                <p className='font-semibold text-gray-500 '>{days_since_contact}<span  className='font-semibold'>d ago</span></p>
                
                 <div className='flex justify-center items-center text-[#244d3f] font-semibold'>
                       {
                        tags.map((tag,ind) => <button className='m-4 badge badge-outline badge-success bg-transparent p-4 rounded-2xl' key={ind} >{tag}</button>)
                    }
                 </div>
              
                  <span className={`font-semibold p-4 rounded-2xl mt-5 text-white ${status === 'overdue'?`badge badge-error`:`badge bg-[#244d3f]`}`}>{status}</span>
               </div>
            </div>
        </div>
        </Link>
    );
};

export default Card;