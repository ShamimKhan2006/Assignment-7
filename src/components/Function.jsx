'use client'

import React, { useContext } from 'react';
import { IoCallOutline, IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';
import { toast } from 'react-toastify';
import { MyContext } from './Context';
import { useRouter } from 'next/navigation';


const Function = () => {
  const [value, setValue] = useContext(MyContext)
  const router = useRouter()

  const handleClick = (type, name) => {
    if (type === 'Call') {
      toast.success("calling now")
    } else if (type === 'Text') {
      toast.success("Text a Message now")
    } else {
      toast.success(" Video calling  now")
    }

    setValue(pre => [
      {
        type,
        name: name,
        date: new Date().toLocaleDateString()
      }, ...pre
    ])

    router.push(`/timeline`)

  }
  return (
    <div className="grid grid-cols-3 gap-4 p-20">


      <div onClick={() => handleClick('Call')} className=" bg-white p-6 text-center mb-6 font-semibold">
        <IoCallOutline className="mx-auto h-6 w-6" />
        <p>Call</p>
      </div>
      <div onClick={() => handleClick('Text')} className=" bg-white p-6 text-center mb-6 font-semibold">
        <MdOutlineTextsms className="mx-auto h-6 w-6" />
        <p>Text</p>
      </div>
      <div onClick={() => handleClick('Video')} className=" bg-white p-6 text-center mb-6 font-semibold">
        <IoVideocamOutline className="mx-auto h-6 w-6" />
        <p>Video</p>
      </div>
    </div>
  );
};

export default Function;