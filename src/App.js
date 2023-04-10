
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Contact from './components/Contact';
import Experience from './components/Experience';
import Work from './components/Work';
import "remixicon/fonts/remixicon.css";
import About from './components/About';
import Resume from "./components/Resume";



function App() {
  return (
    
    
    <Routes>
        <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/' element={<Home/>}/> 
      <Route path='/Contact' element={<Contact/>}/>
      <Route path="/Experience" element={<Experience/>}/>
      <Route path='/Work' element={<Work/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Resume' element={<Resume/>}/>
    </Routes>
  );
}

export default App;
