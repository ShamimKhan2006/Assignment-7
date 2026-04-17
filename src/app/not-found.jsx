import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className=' text-center text-4xl font-bold text-red-500 mt-80 mb-5'>
            <p>This page is Not Found !!</p>
            <button className='btn btn-primary mt-5'><Link href={'/'}>Go Back</Link></button>
            
        </div>
    );
};

export default NotFound;