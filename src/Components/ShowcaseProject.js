import React from 'react';
import './Showcase3.css';

const ShowcaseProject = ({ img, link, className }) => {
    return (
        // <div className={className}>
        //     <div className="card glass className">
        //         <figure className="px-5 pt-5 "
        //         ><img src={img} alt="car!" className='rounded-xl' /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">Life hack</h2>
        //             <p>How to park your car at your garage?</p>
        //             <div className="card-actions justify-end">
        //             </div>
        //         </div>
        //     </div>

        <div className={className}>
            <div className=" rounded">
                <figure><img src={img} alt="Shoes" /></figure>
            </div>
        </div>


    );
};

export default ShowcaseProject;