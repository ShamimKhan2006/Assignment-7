'use client'

import React, { useState } from 'react';
import { MyContext } from './Context';

const Provider = ({children}) => {
    const [value,setvalue]=useState([])
                 
    return (
            <MyContext.Provider value={[value,setvalue]}>
                {children}
            </MyContext.Provider>
        
    );
};

export default Provider;