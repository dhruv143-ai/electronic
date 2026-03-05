import { Tv, Smartphone, Speaker, UtensilsCrossed, WashingMachine, Laptop, Phone, Store, Truck, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
    { icon: Tv, label: "TVs & Displays", desc: "LED, Smart TV, and more" },
    { icon: WashingMachine, label: "Home Appliances", desc: "Washing machines, fridges, ACs" },
    { icon: Smartphone, label: "Mobile Accessories", desc: "Cases, chargers, earphones" },
    { icon: Speaker, label: "Audio & Speakers", desc: "Bluetooth speakers, soundbars" },
    { icon: UtensilsCrossed, label: "Kitchen Appliances", desc: "Mixers, microwaves, induction" },
    { icon: Laptop, label: "Computers & More", desc: "Laptops, printers, accessories" },
];

const steps = [
    { icon: Store, label: "Visit Our Store", desc: "Walk in and explore our full range" },
    { icon: Phone, label: "Call Us", desc: "Dial 097824 35235 for availability" },
    { icon: MessageSquare, label: "Submit Enquiry", desc: "Use the enquiry form online" },
    { icon: Truck, label: "Get Delivery", desc: "Home delivery available in Abu Road" },
];

const Products = () => (
    <main className="pb-20 md:pb-0">
        <section className="bg-gradient-navy text-primary-foreground py-16">
            <div className="container">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Products & Categories</h1>
                <p className="text-primary-foreground/70">Contact for latest availability · Prices vary by model</p>
            </div>
        </section>

        <section className="container py-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition">
                        <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                            <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <h2 className="font-semibold text-lg mb-1">{label}</h2>
                        <p className="text-sm text-muted-foreground mb-3">{desc}</p>
                        <p className="text-xs text-muted-foreground italic">Contact for latest availability</p>
                    </div>
                ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-6 italic">These are placeholder categories — edit to match your actual inventory</p>
        </section>

        <section className="bg-card border-y border-border">
            <div className="container py-16">
                <h2 className="text-2xl font-bold text-center mb-2">How to Buy</h2>
                <p className="text-center text-muted-foreground mb-10 text-sm">Four easy ways to get your electronics</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {steps.map(({ icon: Icon, label, desc }, i) => (
                        <div key={label} className="text-center">
                            <div className="rounded-full bg-accent/10 w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                                <Icon className="h-6 w-6 text-accent" />
                            </div>
                            <div className="text-xs font-bold text-accent mb-1">Step {i + 1}</div>
                            <h3 className="font-semibold text-sm mb-1">{label}</h3>
                            <p className="text-xs text-muted-foreground">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="container py-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Prices vary by model — call for current price</p>
            <a href="tel:09782435235" className="inline-flex items-center gap-2 rounded-lg bg-gradient-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-card hover:opacity-90 transition">
                <Phone className="h-4 w-4" /> Call Now / कॉल करें
            </a>
        </section>
    </main>
);

export default Products;
