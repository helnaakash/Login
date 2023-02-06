
import {BrowserRouter as Router,  Routes,  Route,  Link}   from 'react-router-dom'; 
import Login from "./component/Login";
import Home from "./component/Home";
import Signup from "./component/Signup";




function App() {
  return (
    <Router>  
    <div className="App">  

    <Routes>  
     

          <Route exact path='/' element={< Login />}></Route>  
          <Route exact path='/home' element={< Home />}></Route>  
          <Route exact path='/Signup' element={< Signup />}></Route>  
      
 
   </Routes>  
   </div>  
</Router>
  );
}

export default App;
