
import './App.css'
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom'
import Login from './Components/Login';
import Navbar from './Components/navbar/Navbar'
import Signup from './Components/Signup'
import Homepage from './Components/Pages/Homepage'
import Paint from './Components/Canvas/Paint'








 



function App() {
 
  
  return (
    <>
      
    
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Homepage/>}/>
    <Route path='/home' element={<Paint/>}/>
    <Route path='/usersignin' element={<Login/>}/>
    <Route path='/usersignup' element={<Signup/>}/>
    
    </Routes>
    
    
    

    </>
    
    
   
   
    
  
    
  );
}

export default App;


