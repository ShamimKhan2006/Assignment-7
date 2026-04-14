import React from 'react';
import FriendsData from '../../../../public/data.json'

const FriendsDetails = async ({params}) => {
    const  res = await  params;
    const  {fdId}=res
      
    const singleFriend=FriendsData.find(f => f.id.toString() === fdId)

    if(singleFriend){
        return <div>
            Friends not found
        </div>
    }
     
    return (
        <div>
            <div>
            
            </div>
        </div>
    );
};

export default FriendsDetails;