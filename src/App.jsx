import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import CaseStudy from './components/CaseStudy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-orange-500 selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Problem />
                <Services />
                <CaseStudy />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
