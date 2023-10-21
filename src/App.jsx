import './App.css'
import Home from "./Components/Home/home.jsx";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import PetListing from "./Components/PetListing/petListing.jsx";
import Adoption from "./Components/Adoption/adoption.jsx";
import Profile from "./Components/Profile/profile.jsx";

function App() {
  return (
    <Router>
        <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="petlisting" element={<PetListing/>}/>
            <Route path="adoption" element={<Adoption/>}/>
            <Route path="profile" element={<Profile/>}/>
        </Routes>
    </Router>
  )
}

export default App
