import React from 'react';
import "./home.scss";
import Navbar from '../../components/navbar/Navbar';
//import heroIMG from '../../assets/colimage1a.jpg'
//import {  ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
//import {heroCover} from "../../datasource";
import Slider from '../../components/slider/Slider';
import Testimonials from '../../components/Testimonials/Testimonials';
import NewsLetter from '../../components/NewsLetter';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Slider/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>

    </div>
  );
}

export default Home;
