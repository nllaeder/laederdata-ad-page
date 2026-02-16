import React, { useState } from 'react';
import { Check, ArrowRight, ChevronLeft, ChevronRight, Mic, ShieldCheck, Database } from 'lucide-react';
import caseStudies from '../data/caseStudies.json';

const CaseStudy = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeStudy = caseStudies[activeIndex];

    const nextStudy = () => {
        setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    };

    const prevStudy = () => {
        setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    // Helper to render the correct visual based on type
    const renderVisual = (type) => {
        switch (type) {
            case 'audio_waveform':
                return (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-6">
                        <div className="w-20 h-20 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4 animate-pulse">
                            <Mic size={40} />
                        </div>
                        <div className="flex gap-1 items-end h-8 mb-2">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-1 bg-purple-500 rounded-full animate-[bounce_1s_infinite]" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>
                            ))}
                        </div>
                        <div className="text-slate-300 font-mono text-xs">AI Audio Report Generated</div>
                    </div>
                );
            case 'security_shield':
                return (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-6">
                        <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-4">
                            <ShieldCheck size={40} />
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">5,000+</div>
                        <div className="text-slate-400 text-sm">Contacts Analyzed</div>
                        <div className="mt-4 px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded-full border border-red-500/20">
                            Bot Traffic Blocked
                        </div>
                    </div>
                );
            default: // pool_placeholder
                return (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-6">
                        <div className="text-5xl mb-4">🏊‍♂️</div>
                        <div className="text-slate-300 font-bold text-lg">Devon Manor Swim Club</div>
                        <div className="text-slate-500 text-sm mt-1">Custom Member Portal</div>
                    </div>
                );
        }
    };

    return (
        <section id="casestudy" className="py-24 bg-slate-900 border-y border-white/5 transition-all duration-500">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div className="animate-fade-in relative">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm block pt-2">{activeStudy.subtitle}</span>

                            {/* Carousel Controls */}
                            <div className="flex gap-2">
                                <button
                                    onClick={prevStudy}
                                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/5 hover:border-white/20"
                                    aria-label="Previous case study"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextStudy}
                                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/5 hover:border-white/20"
                                    aria-label="Next case study"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="min-h-[280px]"> {/* Height container to prevent layout jumping */}
                            <h2 key={`title-${activeIndex}`} className="text-3xl md:text-5xl font-bold mb-6 text-white animate-fade-in">{activeStudy.title}</h2>
                            <p key={`desc-${activeIndex}`} className="text-slate-400 text-lg mb-8 leading-relaxed animate-fade-in">
                                {activeStudy.description}
                            </p>

                            <div className="space-y-4 mb-10">
                                {activeStudy.metrics.map((metric, index) => (
                                    <div key={`metric-${activeIndex}-${index}`} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mt-1 flex-shrink-0">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">{metric.label}</h4>
                                            <p className="text-slate-500 text-sm">{metric.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <a href="#contact" className="text-orange-500 font-bold hover:text-orange-400 inline-flex items-center gap-2 group mt-4">
                            {activeStudy.ctaText}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative h-[400px] w-full"> {/* Fixed height for stability */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 rounded-2xl blur-3xl -z-10"></div>

                        <div key={`visual-${activeIndex}`} className="h-full w-full bg-slate-950 border border-white/10 rounded-2xl p-2 shadow-2xl relative animate-fade-in overflow-hidden">
                            {/* Background Grid Effect inside the card */}
                            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                            {/* Render the specific visual component */}
                            {renderVisual(activeStudy.visualType)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
