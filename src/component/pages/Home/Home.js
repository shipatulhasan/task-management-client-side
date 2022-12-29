import React from 'react';
import Header from './Header';
import OverView from './OverView';
import Overview2 from './Overview2';

const Home = () => {
    return (
        <div>
            <div className='px-4 pt-8 pb-3 md:px-24 md:py-10 lg:px-8 lg:py-20'>

            <Header />
            </div>
            <div className='px-4 pb-8 md:px-24 lg:px-8 lg:pb-20'>
                <OverView />
            </div>
            <div className='px-4 pb-8 md:px-24 lg:px-8 lg:pb-20'>
                <Overview2 />
            </div>
        </div>
    );
};

export default Home;