import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const Comment = ({mycomment,index}) => {
    const {image,date,comment,user} = mycomment
    return (
        <div className={`${index ? 'border-none' : 'border-b'} border-khaki pt-10 pb-0 mx-5 dark:text-white text-left`}>
        <div className='flex justify-between items-center'>
        <div className="flex">
          <img
            className="object-cover w-9 h-9 mr-4 rounded-full shadow  border-2 border-transparent ring-fuchsia-700 ring-2"
            src={image ? image : <FaUserAlt />}
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold">{mycomment?.user ? user :'Anonymos'}</p>
            <p className="text-xs text-gray-800">{date}</p>
          </div>
        </div>
        <div>
        </div>
     
        </div>

        <div className='px-4 pt-5'>
        <p className="text-base tracking-wide text-gray-800">
              {comment}
            </p>
        </div>
      </div>
    );
};

export default Comment;