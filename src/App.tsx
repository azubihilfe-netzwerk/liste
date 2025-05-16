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

// 📥 Bild importieren
import backgroundImage from "./images/Webseite-Hintergrund.png";

function App() {
    return (
        <div
            className="flex flex-col min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Navbar />
            <div className="flex-1 bg-white/80">
                <main className="pt-28 max-w-screen-2xl mx-auto w-full px-4 py-8">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/impressum" element={<Impressum />} />
                        <Route path="/kontakt" element={<Kontakt />} />
                        <Route path="/datenschutz" element={<Datenschutz />} />
                        <Route path="/karte" element={<Karte />} />
                        <Route path="unternehmeneintragen" element={<UnternehmenEintragen />} />
                        <Route path="unternehmensuchen" element={<UnternehmenSuchen />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;