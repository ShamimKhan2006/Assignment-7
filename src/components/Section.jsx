
import React from 'react';
import Card from './Card';
  



const Section = async () => {
      const res=await fetch("http://localhost:3000/data.json")
    const Friends= await res.json()
    console.log(Friends,"Friends")
    return (
        <div className='container mx-auto '>
            <h1 className='font-bold text-2xl'>Yours Friend</h1>
            <div className='grid grid-cols-4 gap-4 m-6'>
                {
                 Friends.map(friend => <Card friend={friend} key={friend.id}></Card>)
                }
            </div>
        </div>
    );
};

export default Section;