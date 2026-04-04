import React from 'react';
import { Container } from '../components/Layout';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0A0A0A]">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <span className="block text-xl font-bold mb-1 dark:text-white">Timilehin Oripeloye</span>
                        <span className="text-sm text-gray-400">© {currentYear} — Product Manager</span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                        <span>Built with React + Vite + Tailwind</span>
                        <div className="w-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Back to top</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
