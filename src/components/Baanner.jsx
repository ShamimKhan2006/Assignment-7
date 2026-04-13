import React from 'react';

const Baanner = () => {
    return (
        <div className='m-30 container mx-auto border-b border-b-gray-200 pb-15'>
          <div className='text-center space-y-4'>
              <h1 className='font-bold text-4xl '>Friends to keep close in your life</h1>
            <p className='text-[#7c899d]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <button className='btn bg-[#244d3f] text-white'> + Add a Friend</button>
          </div>
          <div className='container mx-auto grid grid-cols-4 gap-4 mt-20'>
        
            <div className='shadow rounded-2xl bg-base-200'>
                <div className='text-center m-10'>
                    <h1 className='text-3xl'>10</h1>
                <p className='text-[#7c899d]'>Total Friends</p>
                </div>
            </div>
            <div className='shadow rounded-2xl bg-base-200' >
                <div className='text-center m-10'>
                    <h1 className='text-3xl'>10</h1>
                <p className='text-[#7c899d]'>Total Friends</p>
                </div>
            </div>
            <div className='shadow rounded-2xl bg-base-200'>
                <div className='text-center m-10'>
                    <h1 className='text-3xl'>10</h1>
                <p className='text-[#7c899d]'>Total Friends</p>
                </div>
            </div>
            <div className='shadow rounded-2xl bg-base-200'>
                <div className='text-center m-10'>
                    <h1 className='text-3xl'>10</h1>
                <p className='text-[#7c899d]'>Total Friends</p>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Baanner;