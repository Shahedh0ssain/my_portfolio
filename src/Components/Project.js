import React from 'react';
import '../Components/Showcase3.css';
import { Link } from 'react-router-dom';

const Project = ({ img, link, className }) => {
    //  console.log(img)
    // transform: translate(-50%, -50%);

    return (


        <Link>
            <div className="card justify-between  h-96 glass ">
                <div>
                    <figure className="px-5 pt-5 "
                    ><img src={img} alt="car!" className='rounded-xl' /></figure>
                </div>
                <div className=" px-5 py-5">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="justify-end">
                        {/* <p>How to park your car at your garage?</p> */}

                        {/* <svg class="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" style="color: currentcolor; width: 20px; height: 20px;"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg> */}
                    </div>
                </div>
            </div>


        </Link>

    )

}




export default Project;