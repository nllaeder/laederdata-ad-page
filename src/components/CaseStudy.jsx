import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const CaseStudy = () => {
    return (
        <section id="casestudy" className="py-24 bg-slate-900 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">Reference Project</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Modernizing Local Recreation</h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            A local pool membership database was draining money. They were paying for expensive "all-in-one" software that was clunky and overkill.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mt-1 flex-shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">20% Cost Reduction</h4>
                                    <p className="text-slate-500 text-sm">Replaced $1000/yr software with a custom $200 solution.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mt-1 flex-shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Zero Friction Check-in</h4>
                                    <p className="text-slate-500 text-sm">Built a custom QR code scanner that runs on any phone.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mt-1 flex-shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Data Ownership</h4>
                                    <p className="text-slate-500 text-sm">They now own their member list, not the software company.</p>
                                </div>
                            </div>
                        </div>

                        <a href="#contact" className="text-orange-500 font-bold hover:text-orange-400 inline-flex items-center gap-2 group">
                            Ask about custom database solutions
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 rounded-2xl blur-2xl -z-10"></div>
                        <div className="bg-slate-950 border border-white/10 rounded-2xl p-2 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            {/* Placeholder for project screenshot or mockup */}
                            <div className="bg-slate-900 rounded-xl aspect-video flex items-center justify-center border border-white/5 overflow-hidden relative">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950 opacity-50"></div>
                                <div className="text-center z-10">
                                    <div className="text-4xl mb-2">🏊‍♂️</div>
                                    <div className="text-slate-500 font-mono text-sm">Devon Manor Swim Club</div>
                                    <div className="text-slate-600 text-xs mt-1">Custom Member Portal</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
