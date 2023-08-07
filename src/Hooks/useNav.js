import { useEffect, useState } from "react";
// import logo from "https://i.ibb.co/8P8V3FD/logo.png";

const useNav = () => {
    
    let img = [
        "https://i.ibb.co/8P8V3FD/logo.png"
    ]
    
    //navbar scroll when active state
    const [navbar, setNavbar] = useState(false);

    //logo scroll when active
    const [navbarLogo, setNavbarLogo] = useState(img[0]);

    //navbar scroll changeBackground function
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);
    }, []);

    // logo scroll function
    const changeLogo = () => {
        if (window.scrollY >= 300) {
            setNavbarLogo(
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:">
                    Shahed
                </span>
            );
        } else {
            setNavbarLogo(<img className="h-10" src={img[0]} alt="" />);
        }
    };

    useEffect(() => {
        changeLogo();
        // adding the event when scroll change Logo
        window.addEventListener("scroll", changeLogo);
    }, []);

    return { navbar, navbarLogo }
    // return { navbar }
}

export default useNav;