import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../component/Shared/Footer';
import Navbar from '../component/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
           <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;