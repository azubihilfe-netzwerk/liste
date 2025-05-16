import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../images/Logo_schwarz-2048x2048.png'; // Pfad anpassen!

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showUnternehmenSubmenu, setShowUnternehmenSubmenu] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto pl-2 pr-4 py-6 flex justify-between items-center">
                {/* Logo + Schriftzug */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="h-16 w-auto" />
                    <span className="text-2xl font-bold uppercase" style={{ color: '#1a5d5d' }}>Azubihilfe Netzwerk</span>

                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 items-center">
                    <a href="/" className="text-gray-700 hover:text-navbar-blue  text-lg uppercase font-semibold">Home</a>
                    <a href="/karte" className="text-gray-700 hover:text-navbar-blue text-lg uppercase font-semibold">Karte</a>

                    {/* Unternehmen mit Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center text-gray-700 hover:text-navbar-blue text-lg uppercase font-semibold">
                            Unternehmen <ChevronDown className="ml-1 w-4 h-4" />
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                            <a href="/unternehmeneintragen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Eintragen</a>
                            <a href="/unternehmensuchen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Suchen</a>
                        </div>
                    </div>

                    <a href="/kontakt" className="text-gray-700 hover:text-navbar-blue text-lg uppercase font-semibold">Kontakt</a>
                </div>

                {/* Mobile Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Links */}
            {menuOpen && (
                <div className="md:hidden bg-white px-4 pb-4 space-y-2">
                    <a href="/" className="block text-gray-700 hover:text-navbar-blue text-lg uppercase font-semibold">Home</a>
                    <a href="/karte" className="block text-gray-700 hover:text-navbar-blue text-lg uppercase font-semibold">Karte</a>

                    {/* Mobile Untermenü Toggle */}
                    <div>
                        <button
                            className="w-full text-left text-gray-700 hover:text-navbar-blue flex justify-between items-center text-lg uppercase font-semibold"
                            onClick={() => setShowUnternehmenSubmenu(!showUnternehmenSubmenu)}
                        >
                            Unternehmen
                            <ChevronDown className={`w-4 h-4 transform transition-transform ${showUnternehmenSubmenu ? "rotate-180" : ""}`} />
                        </button>
                        {showUnternehmenSubmenu && (
                            <div className="ml-4 mt-2 space-y-1">
                                <a href="/unternehmeneintragen" className="block text-sm text-gray-700 hover:text-navbar-blue">Eintragen</a>
                                <a href="/unternehmensuchen" className="block text-sm text-gray-700 hover:text-navbar-blue">Suchen</a>
                            </div>
                        )}
                    </div>

                    <a href="/kontakt" className="block text-gray-700 hover:text-navbar-blue text-lg uppercase font-semibold">Kontakt</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
