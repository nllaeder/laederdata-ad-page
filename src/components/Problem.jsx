import React from 'react';
import { Clock, AlertTriangle, FileSpreadsheet } from 'lucide-react';

const Problem = () => {
    return (
        <section id="problem" className="py-24 bg-slate-900 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The "Friction" Audit</h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Most small businesses aren't failing because of their product. They're failing because of the "invisible" work that eats up 30% of the day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-slate-950 border border-white/5 p-8 rounded-xl hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group hover:-translate-y-1 text-center">
                        <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-orange-500 mb-6 mx-auto group-hover:scale-110 transition-transform shadow-inner">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">The "Admin" Trap</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Sorting through 200 emails to find one invoice. Manually typing follow-up texts. It feels "productive", but it's just burning cash.
                        </p>
                    </div>

                    <div className="bg-slate-950 border border-white/5 p-8 rounded-xl hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 group hover:-translate-y-1 text-center">
                        <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-red-500 mb-6 mx-auto group-hover:scale-110 transition-transform shadow-inner">
                            <AlertTriangle size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">The Missed Lead</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            A potential client texts you at 8 PM. You reply at 9 AM the next day. Too late. They already booked with the guy who had an auto-responder.
                        </p>
                    </div>

                    <div className="bg-slate-950 border border-white/5 p-8 rounded-xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group hover:-translate-y-1 text-center">
                        <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-blue-500 mb-6 mx-auto group-hover:scale-110 transition-transform shadow-inner">
                            <FileSpreadsheet size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">Data Silos</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Your customer data is stuck in a spreadsheet that nobody looks at. You have no idea which marketing channel is actually making you money.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
