import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white mt-12">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} AzubiNetzwerk. Alle Rechte vorbehalten.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="/impressum" className="hover:underline text-sm">Impressum</a>
                    <a href="/datenschutz" className="hover:underline text-sm">Datenschutz</a>
                    <a href="/kontakt" className="hover:underline text-sm">Kontakt</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
