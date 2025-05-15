import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Dashboard from './Pages/Dashboard';
import Impressum from './Pages/Impressum';
import Footer from "./Component/Footer";
import Kontakt from "./Pages/Kontakt";
import Datenschutz from "./Pages/Datenschutz";
import Karte from "./Pages/Karte";
import UnternehmenEintragen from "./Pages/UnternehmenEintragen";
import UnternehmenSuchen from "./Pages/UnternehmenSuchen";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/datenschutz" element={<Datenschutz/>} />
                <Route path="/karte" element={<Karte />} />
                <Route path="unternehmeneintragen" element={<UnternehmenEintragen />} />
                <Route path="unternehmensuchen" element={<UnternehmenSuchen />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
