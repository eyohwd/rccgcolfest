import React from 'react';
import Navbar from '../../components/navbar/Navbar';
//import Slider from '../../components/slider/Slider';
import Aboutslider from '../../components/Aboutslider';
import './about.scss';
import Aboutcol from '../../components/aboutcol/Aboutcol';
import Footer from '../../components/Footer';
import Gallery from '../../components/gallery/Gallery';
import Gallery2 from '../../components/gallery2/Gallery2';
import Gallery3 from '../../components/gallery3/Gallery3';
import Gallery4 from '../../components/gallery4/Gallery4';

const About = () => {
  return (
    <div className='about'>
        
        <Navbar/>
      <Aboutslider/>
      
      <Aboutcol/>
      <div className="galleryheading">
        <h1 className='title'>GALLERY</h1>
        <hr/>
      </div>
      <Gallery/>
      <Gallery2/>
      <Gallery3/>
      <Gallery4/>
      <Footer/>

    
      


    </div>
  );
}

export default About;
