import React from 'react';
import {FaTwitter,FaLinkedin,FaFacebook} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="px-4 pt-16 bg-slate-100  sm:max-w-xl md:max-w-full  md:px-8">
        <div className="grid gap-10 mb-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="text-xl font-semibold ">
                        <Link to='/' className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">Task manager</Link>
                   
                    </div>
          
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-black">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-black">Phone:</p>
              <a
                href="tel:01819051432"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-black hover:text-deep-purple-800"
              >
                01819051432
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-black">Email:</p>
              <a
                href="mailto:shipatulhasan328@gmail.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-black hover:text-deep-purple-800"
              >
                shipatulhasan328@gmail.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-black">Address:</p>
              <p
                
                className="transition-colors duration-300 text-black"
              >
                312 Omeca Street, NY
              </p>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-black">
              Social
            </span>
            <div className="flex items-center mt-2 space-x-3 text-blue-500">
              <FaTwitter />
              <FaFacebook />
              <FaLinkedin />
            </div>
            <p className="mt-4 text-sm text-black">
            Our platform offers you the lots of options and flexibility to mange yor daily task. ckeck it out and if you face any problem please contact us. 
            </p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto" />
        <div className="flex justify-center items-center pt-5 pb-10 ">
          <p className="text-sm text-black">
            © Copyright 2022 Biker point. All rights reserved.
          </p>
        </div>
      </div>
    );
};

export default Footer;