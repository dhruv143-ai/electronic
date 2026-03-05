import { Truck, Headphones, Wrench, Building2, Phone } from "lucide-react";

const services = [
    { icon: Truck, title: "Home Delivery", desc: "We deliver electronics to your doorstep in Abu Road and nearby areas.", status: "Available" },
    { icon: Headphones, title: "After-Sales Service", desc: "Reliable support and assistance after your purchase to keep things running smoothly.", status: "Available" },
    { icon: Wrench, title: "Installation & Setup", desc: "Professional installation for TVs, ACs, and other appliances.", status: "To be confirmed" },
    { icon: Building2, title: "Bulk & Corporate Orders", desc: "Special pricing and support for bulk and corporate electronics orders.", status: "To be confirmed" },
];

const Services = () => (
    <main className="pb-20 md:pb-0">
        <section className="bg-gradient-navy text-primary-foreground py-16">
            <div className="container">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Our Services</h1>
                <p className="text-primary-foreground/70">More than just a store — we're here for the full journey</p>
            </div>
        </section>

        <section className="container py-16">
            <div className="grid sm:grid-cols-2 gap-6">
                {services.map(({ icon: Icon, title, desc, status }) => (
                    <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                        <div className="flex items-start gap-4">
                            <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center shrink-0">
                                <Icon className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h2 className="font-semibold text-lg">{title}</h2>
                                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${status === "Available" ? "bg-accent/15 text-accent" : "bg-secondary text-muted-foreground"}`}>
                                        {status}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="container py-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Have questions about our services?</p>
            <a href="tel:09782435235" className="inline-flex items-center gap-2 rounded-lg bg-gradient-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-card hover:opacity-90 transition">
                <Phone className="h-4 w-4" /> Call Us / कॉल करें
            </a>
        </section>
    </main>
);

export default Services;
