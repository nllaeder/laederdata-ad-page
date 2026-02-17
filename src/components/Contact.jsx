import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzJEP7OFNBt_ap5rYy-EibPcbDz063cZ_-GI1UubPbWH4qJdl1Md9LjF_PhpUm3msGXdA/exec';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: '',
        business: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await fetch(GOOGLE_SHEET_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify(formData),
            });

            // Google Apps Script with no-cors returns opaque response,
            // so we treat any non-error as success
            setStatus('success');
            setFormData({ name: '', business: '', email: '', message: '' });
        } catch (err) {
            console.error('Form submission error:', err);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Let's Fix It</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-white">Get a Friction Audit</h2>
                    <p className="text-slate-400 text-lg">
                        Tell us where your process breaks down. We'll show you how to automate it.
                        <br />
                        <span className="text-sm text-slate-500 mt-2 block">(No sales calls. Just a technical roadmap.)</span>
                    </p>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
                    {status === 'success' ? (
                        <div className="text-center py-10 animate-fade-in-up">
                            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Request Received!</h3>
                            <p className="text-slate-400">We'll text you shortly to schedule your audit.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-8 text-orange-500 hover:text-orange-400 font-medium"
                            >
                                Send another request
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {status === 'error' && (
                                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg px-4 py-3 text-sm">
                                    <AlertCircle size={18} className="shrink-0" />
                                    Something went wrong. Please try again or text us directly.
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Business Name</label>
                                    <input
                                        type="text"
                                        name="business"
                                        value={formData.business}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                        placeholder="Jane's Bakery"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                    placeholder="jane@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">What is the #1 manual task slowing you down?</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                    placeholder="Examples: Adding invoices to Quickbooks, manually emailing leads, updating inventory..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Get My Free Friction Audit
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        Prefer to text? <a href="sms:+12232210710" className="text-orange-500 hover:text-orange-400 underline">223-221-0710</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
