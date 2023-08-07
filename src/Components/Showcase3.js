import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Showcase3.css';
import Project from './Project';
import ShowcaseProject from './ShowcaseProject';


const Showcase3 = () => {

    return (
        <div className='container mx-auto bg-base-200 border ' >
            <div className='py-20 md:py-40 ' data-aos="zoom-in">
                {/* <h6 className='text-2xl  text-center text-red-600'>Why Choose Us</h6>
                // <h1 className='text-4xl font-bold text-center pb-8'>My Products</h1>
                {/* <p className='text-base text-center leading-7'>Dynamically unleash market positioning convergence for scalable infrastructures <br /> Rapidiously virtual infrastructures
                    rather than market-driven action items.
                </p> */}
                {/* <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3  '>
                    <Project className='animation1' Link='https://amarbook.netlify.app' img='bookshop.jpg'></Project>
                    <Project className='animation2' Link='https://my-apple-watch.netlify.app' img='clock11.jpg'></Project>
                    <Project className='animation3' Link='https://ass-11-100db.web.app/' img='1111.PNG'></Project>
                    <Project className='animation4' Link='https://ass-11-100db.web.app/' img='1111.PNG'></Project>
                    <Project className='animation5' Link='https://ass-11-100db.web.app/' img='1111.PNG'></Project>

                </div>  */}
                {/* div1 */}
                {/* <h1 className='text-4xl font-bold text-center pb-8'>Showcase</h1> */}

                <div className='flex'>
                    <ShowcaseProject className='animation4' Link='https://amarbook.netlify.app' img='bookshop.jpg'></ShowcaseProject>
                    <ShowcaseProject className='animation3' Link='https://amarbook.netlify.app' img='bookshop.jpg'></ShowcaseProject>
                    <ShowcaseProject className='animation1' Link='https://amarbook.netlify.app' img='bookshop.jpg'></ShowcaseProject>
                    <ShowcaseProject className='animation2' Link='https://amarbook.netlify.app' img='bookshop.jpg'></ShowcaseProject>
                    <ShowcaseProject className='animation5' Link='https://amarbook.netlify.app' img='bookshop.jpg'></ShowcaseProject>
                </div>


            </div>
        </div>
    );
};

export default Showcase3;