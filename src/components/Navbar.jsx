import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper function for smooth scrolling
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.querySelector(sectionId);
        if (element) {
            setIsMenuOpen(false); // Close mobile menu if open
            const offset = 80; // Height of navbar + padding
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                        LaederData
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#problem" onClick={(e) => scrollToSection(e, '#problem')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">The Friction</a>
                    <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">The Playbook</a>
                    <a href="#casestudy" onClick={(e) => scrollToSection(e, '#casestudy')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Case Studies</a>
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, '#contact')}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                    >
                        Get a Friction Audit
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-slate-950 border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl md:hidden">
                    <a href="#problem" onClick={(e) => scrollToSection(e, '#problem')} className="text-lg font-medium text-slate-300 py-2">The Friction</a>
                    <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="text-lg font-medium text-slate-300 py-2">The Playbook</a>
                    <a href="#casestudy" onClick={(e) => scrollToSection(e, '#casestudy')} className="text-lg font-medium text-slate-300 py-2">Case Studies</a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="bg-orange-500 text-white px-5 py-3 rounded-lg text-center font-bold mt-2">
                        Get a Friction Audit
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
