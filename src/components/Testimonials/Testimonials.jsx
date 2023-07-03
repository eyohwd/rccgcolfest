import React from 'react';
import './Testimonials.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../images/profile1.jpg";
import profilePic2 from "../../images/profile2.jpg";
import profilePic3 from "../../images/profile3.jpg";
import profilePic4 from "../../images/profile4.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {
    const  clients =[
        {img: profilePic1,
        review: "Being out of job for 4 years, but after pastor anionted me i got several offers.."},
        {img: profilePic2,
            review: "Was kidnap but God's mercy rescued me from the hands of ritual killers.."},
            {img: profilePic3,
                review: "Being in and out of failed relationships but now i'm happily married."},
                {img: profilePic4,
                    review: "Got a multi million naira contract, now my finance is better."},
      ]

  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Believers always Get Exceptional</span> 
             <span>Visitation From God...</span>
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
                        <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span style={{textAlign: "center"}}>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
         </Swiper>

    </div>
  );
}

export default Testimonials;
