
import React from 'react';
import Card from './Card';
import Friends from '../../public/data.json'



const Section = async () => {
     
    return (
        <div className='container mx-auto '>
            <h1 className='font-bold text-2xl'>Yours Friend</h1>
            <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4 gap-4 m-6'>
                {
                 Friends.map(friend => <Card friend={friend} key={friend.id}></Card>)
                }
            </div>
        </div>
    );
};

export default Section;