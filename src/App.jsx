import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/aboutus/About";
import Registermem from "./pages/registermem/Registermem";
import Giving from "./pages/giving/Giving";
import Buildself from "./pages/buildself/Buildself";
import Workerform from "./pages/workerform/Workerform";
import Department from "./components/department/Department";
import Watchlife from "./pages/watchlife/Watchlife";
import Contactus from "./pages/contactus/Contactus";
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import MembersData from "./pages/membersData/MembersData";
import Mylogin from "./pages/mylogin/Mylogin";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";
import WorkersData from "./pages/workersdata/WorkersData";
import Mylogin2 from "./pages/mylogin2/Mylogin2";
import TrainingData from "./pages/trainingData/TrainingData";





function App() {
  const {currentUser} = useContext(AuthContext)

   const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login" />
   };

  return (
    <>
    <ToastContainer/>
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
           <Route path='/membersdata' element={<RequireAuth><MembersData/></RequireAuth> }/> 
           <Route path='/workersdata' element={<RequireAuth><WorkersData/></RequireAuth> }/>
           <Route path='/trainingdata' element={<RequireAuth><TrainingData/></RequireAuth> }/>
           <Route path='/admin' element={<Mylogin/>}/> 
           <Route path="/admin/mylogin2" element={<Mylogin2/>}/>

        </Routes>
  </BrowserRouter>
    
    

      
    </div>
    </>
  );
}

export default App;
