import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Aboutslider from "./components/Aboutslider";
import About from "./pages/aboutus/About";
//import Registermember from "./components/registermember/Registermember";
import Registermem from "./pages/registermem/Registermem";

//const cards= [1,2,3,4,5,6,7,8,9]

function App() {

  return (
    <div>
      
        <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>}/>  
            <Route path='/about' element={<About/>}/>
            <Route path='/registermember' element={<Registermem/>}/>
        </Routes>
  </BrowserRouter>
    
    

      
    </div>
  );
}

export default App;
