
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Navbar2 from './Components/Navbar2';
import Projects from './Components/Projects';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import { useEffect } from 'react';
import Showcase3 from './Components/Showcase3';

function App() {

  // useEffect(() => {
  //   AOS.init();
  // }, [])

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar2></Navbar2>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/' element={<Showcase3 />}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
