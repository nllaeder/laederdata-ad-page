import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Column 1: Company */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                            LaederData
                        </h3>
                        We specialize in "Automation Engineering" for small businesses—building custom automation agents, data pipelines, and dashboards that replace manual work.
                        <p className="text-slate-500 text-xs">
                            &copy; {new Date().getFullYear()} Laeder Consulting, LLC.<br />All rights reserved.
                        </p>
                    </div>

                    {/* Column 2: Services / Stack */}
                    <div>
                        <h4 className="text-white font-bold mb-6">The Playbook</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="hover:text-orange-400 transition-colors cursor-pointer">Shadow Integrations</li>
                            <li className="hover:text-orange-400 transition-colors cursor-pointer">Micro-Agents & Automation</li>
                            <li className="hover:text-orange-400 transition-colors cursor-pointer">Sovereign AI Compliance</li>
                            <li className="hover:text-orange-400 transition-colors cursor-pointer">Data Visualization</li>
                            <li className="hover:text-orange-400 transition-colors cursor-pointer">Legacy System Migration</li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="text-orange-500 mt-0.5" />
                                <span>nicholas@laederconsulting.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="text-orange-500 mt-0.5" />
                                <span>223.221.0710</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-orange-500 mt-0.5" />
                                <span>Central Pennsylvania</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
