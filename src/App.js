

import { Routes, Route, Link } from "react-router-dom";
import Basic from "./Login.js";
import Home from "./Home.js";
import Sining from "./sining.js";





function App() {
  return (
    <div className="w-full h-full">
       <Routes>
         <Route path="/" element={<Basic />} /> 
         <Route path="/home" element={<Home />} /> 
         <Route path="/sining" element={<Sining/>} /> 

            {/* <Route path="about" element={<About />} /> */}
           {/* <Route path="/login" element={<Basic />} /> */}
          
        

      </Routes>
    </div>
  );
}

export default App;
