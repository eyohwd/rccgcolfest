import React from 'react';
import './dslide.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../images/depart2.jpg";
import profilePic2 from "../../images/depart4.jpg";
import profilePic3 from "../../images/depart1.jpg";
import profilePic4 from "../../images/depart3.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Dslide = () => {

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
    
       <div className="t-wrapper">
        <div className="t-heading">
            
             <span>Welcome <br/> To City of Light</span>
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

  );
}

export default Dslide;
