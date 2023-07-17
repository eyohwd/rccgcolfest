import React from 'react';
import Ecobank from "../../images/ecobanklogo.jpg"
import Gtbank from "../../images/gtbank.png"
//import Accessbank from "../../images/acessbank.png"
//import Unionbank from "../../images/unionbank.png"
//import Fcmb from "../../images/fcmb.png"
//import Zenithbank from "../../images/zenithbank.png"
import "./giving.scss";
import { Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const Giving = () => {
  return (
    <div className='giving'>
        <div className="top">
               <Link to='/' style={{textDecoration: "none"}}>
            <Home style={{fontSize: "40px", color: "orangered"}}/>
               </Link>
            
            <h1 className='title'>Giving</h1>
            <p className='desc'>
                In giving to the work of God's Kingdom, you 
                contribute to advancing it here on earth.
                Your financial involvement could also be the
                 greatest investment you make in the lives of others.
                 Your generosity helps spread Christ's 
                 message of hope and healing.</p>
            <button>BANK TRANSFER</button>
        </div>
        
        

        <div className="call">
            <h1>IF YOU HAVE ANY ISSUES WITH PAYMENT,<br/> PLEASE CONTACT US AT
                col@gmail.com or call 08093603724.
            </h1>
        </div>


        <div className="accnum">
            <h1>Account Number</h1>
        </div>



        <div className='banks'>
            <div className="left">
                
                <div className="card">
                    <img src={Ecobank} alt="" />
               
               
               
                <div className="ussdcode">
                    

                    

                    <div className="items">
                    <span className="itemKey">TITLE:</span>
                    <span className="itemValue">GMHS/VIGILS</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Acc Name:</span>
                    <span className="itemValue">RCCG CITY OF LIGHT</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Acc Number:</span>
                    <span className="itemValue">5332010221</span>
                    </div>
                
                
                
                
                </div>
                
                </div>

              
                
                <div className="card">
                    <img src={Gtbank} alt="" />

                    <div className="ussdcode">
                    

                    <div className="items">
                    <span className="itemKey">TITLE:</span>
                    <span className="itemValue">TITHES AND OFFERINGS</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Acc Name:</span>
                    <span className="itemValue">RCCG CITY OF LIGHT</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Acc Number:</span>
                    <span className="itemValue">0012848158</span>
                    </div>
                </div>

                </div>
                
              {/*  <div className="card">
                    <img src={Accessbank} alt="" />

                    <div className="ussdcode">
                    

                    <div className="items">
                    <span className="itemKey">Acc Name:</span>
                    <span className="itemValue">City of Light</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Acc Number:</span>
                    <span className="itemValue">108577894</span>
                    </div>
                </div>

                </div> */} 


            </div>

       
       



            <div className="right">

            <div className="card">
                    <img src={Gtbank} alt="" />

                    <div className="ussdcode">


                    <div className="items">
                    <span className="itemKey">TITLE:</span>
                    <span className="itemValue">BUILDING PROJECT</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Acc Name:</span>
                    <span className="itemValue">RCCG CITY OF LIGHT</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Acc Number:</span>
                    <span className="itemValue">0115013994</span>
                    </div>
                </div>

                </div>


             {/*     <div className="card">
                    <img src={Fcmb} alt="" />

                    <div className="ussdcode">
                    

                    <div className="items">
                    <span className="itemKey">Acc Name:</span>
                    <span className="itemValue">City of Light</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Acc Number:</span>
                    <span className="itemValue">070065438</span>
                    </div>
                </div>

                </div>


                <div className="card">
                    <img src={Zenithbank} alt="" />

                    <div className="ussdcode">
                    

                    <div className="items">
                    <span className="itemKey">Acc Name:</span>
                    <span className="itemValue">City of Light</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Acc Number:</span>
                    <span className="itemValue">0105567908</span>
                    </div>
                </div>

                </div>  */}


            </div>
        </div>
        

        
        
        
      
    </div>
  );
}

export default Giving;
