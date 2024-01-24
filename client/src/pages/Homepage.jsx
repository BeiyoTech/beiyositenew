import { useState } from 'react'
import Feature from './Home page/Feature';
import 'swiper/css';
import Testimonial from './Home page/Testimonial';
import Faq from './Home page/Faq';
// import FaqMobile from './pages/FaqMobile';
import Navbar from './Home page/Nav';
import Hero from './Home page/Hero';
import Scrolltext from './Home page/Scrolltext';
import FaqMobile from './Home page/FaqMobile';
import Mainfeature from './Home page/Mainfeature';
import MainFeatureMobile from './Home page/mainFeatureMobile';

function Homepage() {
  return (
    <>

     <div className="homepage">
      <Hero/>
      <Scrolltext/>
      <Feature/>
      <Mainfeature/>
      <MainFeatureMobile/>
      <Testimonial/> 
      <Faq/>
      <FaqMobile/>
     </div>
    </>
  )
}

export default Homepage