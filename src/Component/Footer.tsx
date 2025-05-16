import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="mt-4" style={{ backgroundColor: '#1a5d5d', color: 'white' }}>
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} AzubiNetzwerk. Alle Rechte vorbehalten.</p>

                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <a href="/impressum" className="hover:underline text-sm text-white">Impressum</a>
                    <a href="/datenschutz" className="hover:underline text-sm text-white">Datenschutz</a>
                    <a href="/kontakt" className="hover:underline text-sm text-white">Kontakt</a>

                    {/* Scroll to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="p-2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full transition"
                        aria-label="Nach oben scrollen"
                    >
                        <ArrowUp className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
