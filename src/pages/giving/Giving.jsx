import React from 'react';
import Firstbank from "../../images/firstbank.png"
import Gtbank from "../../images/gtbank.png"
import Accessbank from "../../images/acessbank.png"
import Unionbank from "../../images/unionbank.png"
import Fcmb from "../../images/fcmb.png"
import Zenithbank from "../../images/zenithbank.png"
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
            <button>GIVE ONLINE USING CARD</button>
        </div>
        <div className="ussd">
            <h1>Ussd Codes</h1>
        </div>
        <div className='banks'>
            <div className="left">
                
                <div className="card">
                    <img src={Firstbank} alt="" />
                <div className="ussdcode">
                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>
                
                
                
                
                </div>
                
                </div>

              
                
                <div className="card">
                    <img src={Gtbank} alt="" />

                    <div className="ussdcode">
                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>
                </div>

                </div>
                
                <div className="card">
                    <img src={Accessbank} alt="" />

                    <div className="ussdcode">
                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>
                </div>

                </div>


            </div>

       
       



            <div className="right">

            <div className="card">
                    <img src={Unionbank} alt="" />

                    <div className="ussdcode">
                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>
                </div>

                </div>


                <div className="card">
                    <img src={Fcmb} alt="" />

                    <div className="ussdcode">
                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>
                </div>

                </div>


                <div className="card">
                    <img src={Zenithbank} alt="" />

                    <div className="ussdcode">
                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>
                </div>

                </div>


            </div>
        </div>

        <div className="call">
            <h1>IF YOU HAVE ANY ISSUES WITH PAYMENT,<br/> PLEASE CONTACT US AT
                col@gmail.com or call 0904352615.
            </h1>
        </div>


        <div className="accnum">
            <h1>Account Number</h1>
        </div>



        <div className='banks'>
            <div className="left">
                
                <div className="card">
                    <img src={Firstbank} alt="" />
                <div className="ussdcode">
                    

                    

                    <div className="items">
                    <span className="itemKey">Account Name:</span>
                    <span className="itemValue">City of light</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Account Number:</span>
                    <span className="itemValue">012376547</span>
                    </div>
                
                
                
                
                </div>
                
                </div>

              
                
                <div className="card">
                    <img src={Gtbank} alt="" />

                    <div className="ussdcode">
                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>
                </div>

                </div>
                
                <div className="card">
                    <img src={Accessbank} alt="" />

                    <div className="ussdcode">
                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>
                </div>

                </div>


            </div>

       
       



            <div className="right">

            <div className="card">
                    <img src={Unionbank} alt="" />

                    <div className="ussdcode">
                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>
                </div>

                </div>


                <div className="card">
                    <img src={Fcmb} alt="" />

                    <div className="ussdcode">
                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>
                </div>

                </div>


                <div className="card">
                    <img src={Zenithbank} alt="" />

                    <div className="ussdcode">
                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>

                    <div className="items">
                    <span className="itemKey">Offering:</span>
                    <span className="itemValue">*966*000*874+Amount#</span>
                    </div>
                </div>

                </div>


            </div>
        </div>
        

        
        
        
      
    </div>
  );
}

export default Giving;
