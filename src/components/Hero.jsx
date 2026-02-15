import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative bg-blueprint min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"></div>

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-orange-500 mb-8">
                    <Sparkles size={12} />
                    <span>Automation that pays for itself</span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-white">
                    Stop Drowning in Data. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                        Start Automating Results.
                    </span>
                </h1>

                <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                    We don't sell code. We sell the 10 hours a week you're wasting on manual data entry, follow-ups, and report building.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                    <a href="#contact" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-orange-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        Get a Friction Audit
                        <ArrowRight size={20} />
                    </a>
                    <a href="#services" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:-translate-y-1 text-center">
                        See the Playbook
                    </a>
                </div>

                {/* Integrations - Styled as a subtle footer to the hero */}
                <div className="border-t border-white/5 pt-10">
                    <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">Works with your existing stack</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-lg font-bold text-slate-300">Salesforce</span>
                        <span className="text-lg font-bold text-slate-300">HubSpot</span>
                        <span className="text-lg font-bold text-slate-300">Shopify</span>
                        <span className="text-lg font-bold text-slate-300">Gmail</span>
                        <span className="text-lg font-bold text-slate-300">Google Calendar</span>
                        <span className="text-lg font-bold text-slate-300">Excel/CSV</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
