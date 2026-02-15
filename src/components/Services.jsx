import React from 'react';
import { Bot, Workflow, ShieldCheck, BarChart3 } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Shadow Integrations",
            desc: "Connecting apps that don't want to talk. We build custom bridges between your legacy software and modern tools like SMS, WhatsApp, and Email.",
            icon: <Workflow />,
            color: "text-orange-500",
            bg: "bg-orange-500"
        },
        {
            title: "Micro-Agents",
            desc: "Tiny, purpose-built bots that handle specific tasks. One to draft emails, one to check inventory, one to schedule meetings.",
            icon: <Bot />,
            color: "text-blue-500",
            bg: "bg-blue-500"
        },
        {
            title: "Sovereign AI Compliance",
            desc: "Run AI models on your own hardware. Keep your customer data private and secure, away from big tech cloud servers.",
            icon: <ShieldCheck />,
            color: "text-green-500",
            bg: "bg-green-500"
        },
        {
            title: "Data Analysis & Insights",
            desc: "Turn your messy spreadsheets into clear dashboards. We find the hidden patterns in your data that reveal where you're losing money.",
            icon: <BarChart3 />,
            color: "text-purple-500",
            bg: "bg-purple-500"
        }
    ];

    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">The Playbook</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-slate-900">Automated Results. <br />Not Just Tools.</h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 rounded-xl bg-slate-50 border border-slate-200 hover:shadow-xl transition-all duration-300 cursor-default group hover:-translate-y-1 text-center">
                            <div className={`w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-100`}>
                                {React.cloneElement(service.icon, { className: `w-7 h-7 ${service.color}` })}
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-slate-900">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {service.description || service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
