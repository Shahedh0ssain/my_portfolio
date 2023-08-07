import React from 'react';
import './Showcase3.css';

const Showcase = () => {
    return (
        <div>
            <div className="w-full hero md:min-h-screen bg-base-200 p-5 md:p-10 border">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className=' md:w-2/5 '>
                        <div className='App-logo'>
                            <svg className='App-logo' aria-labelledby="react-visual-title" fill="none"
                                height="300"
                                role="img"
                                viewBox="0 0 246 219"
                                width="350"
                                xmlns="http://www.w3.org/2000/svg"
                                class="next-announcements_reactVisual__Y_YGw">
                                <title id="react-visual-title">The upper half of the React logo, an illustration of an atom, peaks out from the bottom of this element. It has a metallic shading effect.</title>
                                <circle cx="123" cy="110" fill="black" r="21"></circle><circle cx="123" cy="110" fill="url(#paint0_radial_1766_6655)" r="21"></circle><path d="M123 154.448C187.977 154.448 240.652 134.324 240.652 109.5C240.652 84.6757 187.977 64.5516 123 64.5516C58.0223 64.5516 5.34766 84.6757 5.34766 109.5C5.34766 134.324 58.0223 154.448 123 154.448Z" stroke="url(#paint1_radial_1766_6655)"></path><path d="M84.0966 131.974C116.585 188.28 160.34 223.862 181.826 211.45C203.312 199.038 194.392 143.331 161.903 87.0259C129.415 30.7204 85.6597 -4.86225 64.1739 7.5499C42.6882 19.962 51.6079 75.6687 84.0966 131.974Z" stroke="url(#paint2_radial_1766_6655)"></path><path d="M84.0966 87.0259C51.6079 143.331 42.6882 199.038 64.1739 211.45C85.6597 223.862 129.415 188.28 161.903 131.974C194.392 75.6687 203.312 19.9621 181.826 7.5499C160.34 -4.86224 116.585 30.7204 84.0966 87.0259Z" stroke="url(#paint3_radial_1766_6655)"></path><defs><radialGradient cx="0" cy="0" gradientTransform="translate(116.296 98.9923) rotate(76.4218) scale(28.5568 28.555)" gradientUnits="userSpaceOnUse" id="paint0_radial_1766_6655" r="1"><stop stop-color="white" stop-opacity="0.4"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></radialGradient><radialGradient cx="0" cy="0" gradientTransform="translate(117.5 157.5) rotate(-57.0241) scale(100.131 741.727)" gradientUnits="userSpaceOnUse" id="paint1_radial_1766_6655" r="1"><stop></stop><stop offset="1" stop-opacity="0.1"></stop></radialGradient><radialGradient cx="0" cy="0" gradientTransform="translate(149.5 66.5) rotate(117.818) scale(112.501 294.733)" gradientUnits="userSpaceOnUse" id="paint2_radial_1766_6655" r="1"><stop></stop><stop offset="1" stop-opacity="0.1"></stop></radialGradient><radialGradient cx="0" cy="0" gradientTransform="translate(110.5 43.5) rotate(80.6433) scale(89.1866 233.653)" gradientUnits="userSpaceOnUse" id="paint3_radial_1766_6655" r="1"><stop></stop><stop offset="1" stop-opacity="0.1"></stop></radialGradient></defs>
                            </svg>
                        </div>
                    </div>
                    {/* <img  srcSet="sppinar.png" className="w-[400px] App-logo  mr-5" /> */}
                    <div data-aos="fade-right" data-aos-duration="1000" className='w-full  md:w-3/5'>
                        <h1 className="text-2xl font-bold py-3">HEY THERE!</h1>
                        <h1 className="text-4xl md:text-5xl font-bold">I'M SHAHED HOSSAIN</h1>
                        <p className="py-6  ">Web design & development is my passion. I can design & develop website as per requirment.</p>
                        <div>
                            <div className="flex ">
                                <p class="text-red-500">FOLLOW ME NOW :</p>
                                <a className='px-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5   fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                <a className='px-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5   fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                <a className='px-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5  fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                            </div>
                        </div>
                        <button className="btn glass my-5 text-black">Resume download</button>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;