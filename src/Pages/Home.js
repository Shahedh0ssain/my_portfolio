import React, { useEffect } from 'react';

import Showcase from '../Components/Showcase';
import Showcase1 from '../Components/Showcase1';
import Showcase3 from '../Components/Showcase3';
import Showcase4 from '../Components/Showcase4';

import Review from '../Components/Review';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Home = () => {

    useEffect(() => {
        AOS.init();
    }, [])


    return (

        <div>
            <Showcase></Showcase>
            <Showcase1></Showcase1>
            {/* <Services></Services> */}
            <Showcase4></Showcase4>
            <Showcase3></Showcase3>

            <Review></Review>
        </div>
    );
};

export default Home;