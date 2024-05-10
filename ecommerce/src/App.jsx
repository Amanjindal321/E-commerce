import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import TopProducts from './components/TopProducts/TopProducts';

import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration:800,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  return <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
    </div>;
  
};

export default App