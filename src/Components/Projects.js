import React from 'react';
import Project from './Project';

const Projects = () => {
    return (
        <div className='pt-5 md:pt-20 py-20'>
            {/* <h1 className='text-center text-4xl'>Project</h1> */}
            <h1 className='text-4xl font-bold text-center py-5'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-3'>
                <Project Link='https://amarbook.netlify.app' img='bookshop.jpg'></Project>
                <Project Link='https://my-apple-watch.netlify.app' img='clock11.jpg'></Project>
                <Project Link='https://ass-11-100db.web.app/' img='1111.PNG'></Project>
                <Project Link='https://ass-12-242eb.web.app/' img='999.jpg'></Project>
                <Project Link='' img='https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauth0.c1c2d37c.png&w=640&q=55'></Project>
                <Project Link='' img='https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faudible.795442da.jpg&w=640&q=55'></Project>
            </div>

        </div>
    );
};



export default Projects;