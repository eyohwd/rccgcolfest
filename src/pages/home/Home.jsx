import React from 'react';
import "./home.scss";
import Navbar from '../../components/navbar/Navbar';
//import heroIMG from '../../assets/colimage1a.jpg'
//import {  ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
//import {heroCover} from "../../datasource";
import Slider from '../../components/slider/Slider';

import NewsLetter from '../../components/NewsLetter';
import Footer from '../../components/Footer';
import Aboutslider from '../../components/Aboutslider';

import Dslide from '../../components/dslide/Dslide';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Slider/>
      <Dslide/>
      <NewsLetter/>
      <Aboutslider/>
      
      <Footer/>

    </div>
  );
}

export default Home;
