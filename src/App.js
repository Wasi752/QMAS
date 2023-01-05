import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Madrasapage1 from './Madrasha panel/madrasha1stpage';
import Oldjamat from './Madrasha panel/oldjamat';
import OldStudentList from './Madrasha panel/OldStudent';
import StDetailsList from './Madrasha panel/StDetails';
import StList from './Madrasha panel/StList';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Madrasapage1 />} />
        <Route path="/oldstudent" element={<Oldjamat />} />
        <Route path="/oldstudent/:menu" element={<OldStudentList />} />
        <Route path="/stdetails/:menu" element={<StDetailsList/>} />
        <Route path="/stlist/:menu" element={<StList/>} />
      </Routes>
    </div>
  );
}

export default App;
