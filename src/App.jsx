import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/aboutus/About";
import Registermem from "./pages/registermem/Registermem";
import Giving from "./pages/giving/Giving";
import Buildself from "./pages/buildself/Buildself";
import Workerform from "./pages/workerform/Workerform";
import Department from "./components/department/Department";
import Watchlife from "./pages/watchlife/Watchlife";

import Contactus from "./pages/contactus/Contactus";


//const cards= [1,2,3,4,5,6,7,8,9]

function App() {

  return (
    <div>
      
        <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>}/>  
            <Route path='/about' element={<About/>}/>
            <Route path='/registermember' element={<Registermem/>}/>
            <Route path='/giving' element={<Giving/>}/>
           <Route path='/buildself' element={<Buildself/>}/> 
           <Route path='/workerform' element={<Workerform/>}/> 
           <Route path='/department' element={<Department/>}/> 
           <Route path='/watchlife' element={<Watchlife/>}/> 
           <Route path='/contact' element={<Contactus/>}/> 

        </Routes>
  </BrowserRouter>
    
    

      
    </div>
  );
}

export default App;
