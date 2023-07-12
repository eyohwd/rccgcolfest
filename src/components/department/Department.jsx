import React from 'react';
import './department.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../images/depart2.jpg";
import profilePic2 from "../../images/depart4.jpg";
import profilePic3 from "../../images/depart1.jpg";
import profilePic4 from "../../images/depart3.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import Navbar from '../navbar/Navbar';


const Department = () => {
    const  clients =[
        {img: profilePic1,
        review: "City of Light"},
        {img: profilePic2,
            review: "Where the light never cease"},
            {img: profilePic3,
                review: "Join us praise this God."},
                {img: profilePic4,
                    review: "Hymes of thanks."},
      ]

  return (
    <div className="containercover">

        <Navbar/>

    
    <div className="t-wrapper">
        <div className="t-heading">
            <span>City of Light Departments</span> 
             <span>Welcome to City Of Light</span>
           <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>
         {/* slider */}
         <Swiper
         modules={[Pagination]}
         slidesPerView={1}
         pagination={{clickable: true}}
         >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial2">
                        <img src={client.img} alt="avatar" />
                        <span style={{textAlign: "center"}}>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
         </Swiper>

         

    </div>

    <div className='container1'>
           
           <div className="leftdept">
            <div className="leftbox">
                <img src={profilePic1} alt="" className='imgleft'/>
                <div className="textbox">
                    <h2 className='title1'>Choir</h2>
                    <div className="desc1">
                    The Junior Church engages 
                     from 0 - 12 years, teaching
                      them biblical truths and showing
                       them practical ways to live them 
                       out. The atmosphere 
                    offers security and guidance,
                     allowing each child to thrive and grow in Christ.
                    </div>
                </div>
            </div>

            <div className="leftbox">
                <img src={profilePic1} alt="" className='imgleft'/>
                <div className="textbox">
                    <h2 className='title1'>Choir</h2>
                    <div className="desc1">
                    The Junior Church engages 
                     from 0 - 12 years, teaching
                      them biblical truths and showing
                       them practical ways to live them 
                       out. The atmosphere 
                    offers security and guidance,
                     allowing each child to thrive and grow in Christ.
                    </div>
                </div>
            </div>

            <div className="leftbox">
                <img src={profilePic1} alt="" className='imgleft'/>
                <div className="textbox">
                    <h2 className='title1'>Choir</h2>
                    <div className="desc1">
                    The Junior Church engages 
                     from 0 - 12 years, teaching
                      them biblical truths and showing
                       them practical ways to live them 
                       out. The atmosphere 
                    offers security and guidance,
                     allowing each child to thrive and grow in Christ.
                    </div>
                </div>
            </div>
        
          </div>

           <div className="rightdept">
           <div className="rightbox">
           <img src={profilePic1} alt="" className='imgleft'/>
           <div className="textbox">
                    <h2 className='title1'>Choir</h2>
                    <div className="desc1">
                    The Junior Church engages 
                     from 0 - 12 years, teaching
                      them biblical truths and showing
                       them practical ways to live them 
                       out. The atmosphere 
                    offers security and guidance,
                     allowing each child to thrive and grow in Christ.
                    </div>
                </div>
           </div>

           <div className="rightbox">
           <img src={profilePic1} alt="" className='imgleft'/>
           <div className="textbox">
                    <h2 className='title1'>Choir</h2>
                    <div className="desc1">
                    The Junior Church engages 
                     from 0 - 12 years, teaching
                      them biblical truths and showing
                       them practical ways to live them 
                       out. The atmosphere 
                    offers security and guidance,
                     allowing each child to thrive and grow in Christ.
                    </div>
                </div>
           </div>

           <div className="rightbox">
           <img src={profilePic1} alt="" className='imgleft'/>
           <div className="textbox">
                    <h2 className='title1'>Choir</h2>
                    <div className="desc1">
                    The Junior Church engages 
                     from 0 - 12 years, teaching
                      them biblical truths and showing
                       them practical ways to live them 
                       out. The atmosphere 
                    offers security and guidance,
                     allowing each child to thrive and grow in Christ.
                    </div>
                </div>
           </div>
                
    
           </div>
         </div>

    </div>
  );
}

export default Department;
