import React from 'react';

const Services = () => {
    return (
        <div style={{ backgroundColor: 'rgb(248,248,248)' }} className='container mx-auto'>
            <div className='py-20 md:py-40'>
                <h6 className='text-2xl  text-center text-red-600'>Why Choose Us</h6>
                <h1 className='text-4xl font-bold text-center py-5'>My Services</h1>

                <div className='h-96 carousel carousel-vertical rounded-box'>

                    <div className="carousel-item h-full flex flex-col justify-center items-center">
                        {/* <svg className='w-10' xmlns="https://habibullahftl.web.app/images/web-design.svg" viewBox="0 0 384 512"><path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM192 0C90.02 .3203 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.8 289.2 .0039 192 0zM288.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C75.24 236.8 64 206.1 64 175.1C64 113.3 112.1 48.25 191.1 48C262.6 48 320 105.4 320 175.1C320 206.1 308.8 236.8 288.4 260.1zM176 80C131.9 80 96 115.9 96 160c0 8.844 7.156 16 16 16S128 168.8 128 160c0-26.47 21.53-48 48-48c8.844 0 16-7.148 16-15.99S184.8 80 176 80z" /></svg> */}
                        <img className='w-20' src="https://habibullahftl.web.app/images/web-design.svg" alt="" srcset="" />
                        <h2 className="card-title text-2xl py-2">Web Desgin</h2>
                        <p className='text-center'>I can make a fully responsive front end and static website like Portfolio, E-commerce & others.</p>
                    </div>


                    <div className=" carousel-item h-full flex flex-col justify-center items-center">
                        {/* <svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" /></svg> */}
                        <img className='w-20' src="https://habibullahftl.web.app/images/web-development.svg" alt="" srcset="" />
                        <h2 className="card-title text-2xl py-2">Full Stack Developmen</h2>
                        <p className='text-center'>I can develop website with clean, fresh and issue free code to make your website dynamic perfectly.</p>
                    </div>


                    <div className=" carousel-item h-full flex flex-col justify-center items-center">
                        <div>
                            <img className='w-20' src="https://habibullahftl.web.app/images/ui.svg" alt="" srcset="" />

                        </div>
                        <h2 className="card-title text-2xl py-2">UI/UX Design</h2>
                        <p className='text-center'>
                            I can design creative UI for your app or website as per your demand and specification.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;