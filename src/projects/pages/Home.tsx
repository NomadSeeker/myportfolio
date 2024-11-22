import React from 'react';

import Card from '../../shared/components/UIElements/Card';

const Home = () => {

    return (
        <>
        <section className='bg-gradient-to-r from-cyan-300 from-55% to-blue-400 py-6'>
            <div className='"py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"'>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Juan Jose Arroyo</h1>
                <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48'>I'm a front-end software engineer skilled in React</p>
            </div>
            {/* <div className='px-4 mx-auto text-centermd:max-w-screen-md lg:max-w-screen-lg lg:px-36'>
                <span className='font-semibold text-gray-400 uppercase'>Links</span>
                <div className='grid grid-rows-3'>

                </div>
            </div> */}
        </section>
        <section className='bg-slate-100 py-7'>
            <div className='container mx-auto '>
                    <h1 className='font-extrabold mb-3 text-2xl'>Projects</h1>
                    <div className='grid grid-cols-1 gap-5 justify-items-center md:grid-cols-3 md:gap-3 md:justify-items-stretch'>
                        <Card title="Natours Site" description="Landing site for a tours business company." image="/myportfolio/images/Natours-site.png" buttonText="Visit Project" url="https://nattours24.netlify.app" />
                        <Card title="Nexter Site" description="Landing site for a Real State business company." image="/myportfolio/images/Nexter-site.png" buttonText="Visit Project" url="https://next3r.netlify.app"/>
                        <Card title="Trillo Site" description="Landing site for Travel Booking business." image="/myportfolio/images/Trillo-site.png" buttonText="Visit Project" url="https://tryllo.netlify.app"/>
                        <Card title="Movies app" description="A full-stack movie application developed with Nodejs, Express, Reactjs and MongoDB." image="/myportfolio/images/movies-app.png" buttonText="Visit Project" url="https://movies-app-brown-one.vercel.app"/>
                    </div>
                    
                </div>
        </section>
            
        </>
    );
}

export default Home;

