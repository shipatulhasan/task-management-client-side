import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../component/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
           
            <Outlet />
        </div>
    );
};

export default Main;