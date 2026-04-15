import React from 'react';
import FriendsData from '../../../../public/data.json'
import Image from 'next/image';

const FriendsDetails = async ({params}) => {
   
    const  res = await  params;
    const  {fdId}= await res
    
      
    const singleFriend=FriendsData.find(f => f.id.toString() === fdId)
     

    if(!singleFriend){
        return <div>
            Friends not found
        </div>
    }
    const {picture,name,tags,status,days_since_contact,bio,goal,next_due_date}=singleFriend
     
    return (
        <div className='w-8/12 mx-auto  my-10'>
          <div className='grid grid-cols-2'>
                 <div>
                        <div className='shadow p-2 rounded-lg gap-4  bg-base-200 w-150'>
                            <div className='flex justify-center items-center mt-5 '>
                        <Image className='rounded-full object-cover w-20 h-20' src={picture} alt='picture' width={80} height={80} />
                        </div>
                           <div className='text-center'>
                             <h1 className='font-bold text-2xl'>{name}</h1>
                            <p className='font-semibold text-gray-500 '>{days_since_contact}<span  className='font-semibold'>d ago</span></p>
                            
                             <div className='flex justify-center items-center text-[#244d3f] font-semibold'>
                                   {
                                    tags.map((tag,ind) => <button className='m-2 badge badge-outline badge-success bg-transparent p-2 rounded-2xl' key={ind} >{tag}</button>)
                                }
                             </div>
                          
                              <span className={`font-semibold p-2 rounded-2xl mt-2 text-white ${status === 'overdue'?`badge badge-error`:`badge bg-[#244d3f]`}`}>{status}</span>
                              <p className='py-5 text-gray-400 font-semibold'>{bio}</p>
                           </div>
                        </div>
                          <div className='mx-auto container '>
                        <div className='bg-base-200 p-5 mt-5 w-150'>
                               <h1>ssssssss</h1>
                        </div>
                        <div className='bg-base-200 p-5 mt-5 w-150'>
                               <h1>ssssssss</h1>
                        </div>
                        <div className='bg-base-200 p-5 mt-5 w-150'>
                               <h1>ssssssss</h1>
                        </div>
                    </div>
                    </div>

                   <div>
                     <div className='grid grid-cols-3 gap-4'>
                       <div className=' bg-base-200 p-2  rounded-md'>
                         <div className='text-center mx-auto mt-4'>
                             <h1 className='text-3xl pb-2 font-bold'>{days_since_contact}</h1>
                          <p className='text-gray-400 font-semibold'>Days Since Contact</p>
                         </div>
                       </div>
                       <div className=' bg-base-200 p-2  rounded-md'>
                         <div className='text-center mx-auto mt-4'>
                             <h1 className='text-3xl pb-2 font-bold '>{goal}</h1>
                          <p className='text-gray-400 font-semibold'>Goal (Days)</p>
                         </div>
                       </div>
                       <div className=' bg-base-200 p-2   rounded-md'>
                         <div className='text-center mx-auto mt-4'>
                             <h1 className='text-3xl pb-2 font-bold'>{next_due_date}</h1>
                          <p className='text-gray-400 font-semibold'>Next Due</p>
                         </div>
                       </div>
                    </div>

                    <div className='bg-base-200 p-10 mt-15 rounded-md'>

                         <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-semi'>Relationship Goal</h1>
                            <button className='btn'>Edit</button>
                        </div>
                        <p className='text-gray-400'>Connect every 30 days</p>
                       </div>
                   </div>
                    </div>
          </div>
    );
};

export default FriendsDetails;