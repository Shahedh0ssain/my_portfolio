
// import { Link } from 'react-router-dom';
import './Showcase3.css';

import ShowcaseProject from './ShowcaseProject';


const Showcase3 = () => {

    return (
        <div className='container mx-auto bg-base-200 border ' >
            <div className='py-20 md:py-40 ' data-aos="zoom-in">

                {/* <h1 className='text-4xl font-bold text-center pb-8'>Showcase</h1> */}

                <div className='flex'>
                    <ShowcaseProject className='animation4' Link='https://amarbook.netlify.app' img='111.jpg'></ShowcaseProject>
                    <ShowcaseProject className='animation3' Link='https://amarbook.netlify.app' img='111.jpg'></ShowcaseProject>
                    <ShowcaseProject className='animation1' Link='https://amarbook.netlify.app' img='111.jpg'></ShowcaseProject>
                    <ShowcaseProject className='animation2' Link='https://amarbook.netlify.app' img='111.jpg'></ShowcaseProject>
                    <ShowcaseProject className='animation5' Link='https://amarbook.netlify.app' img='111.jpg'></ShowcaseProject>
                </div>


            </div>
        </div>
    );
};

export default Showcase3;