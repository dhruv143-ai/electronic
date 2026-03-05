import { Star, Phone, MapPin, MessageSquare, Truck, Headphones, Zap, Tv, Smartphone, Speaker, UtensilsCrossed, WashingMachine, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "../assets/download.jpg";

const categories = [
    { icon: Tv, label: "TVs & Displays" },
    { icon: WashingMachine, label: "Home Appliances" },
    { icon: Smartphone, label: "Mobile Accessories" },
    { icon: Speaker, label: "Audio & Speakers" },
    { icon: UtensilsCrossed, label: "Kitchen Appliances" },
    { icon: Laptop, label: "Computers & More" },
];

const Index = () => {
    return (
        <main className="pb-20 md:pb-0">
            {/* Hero */}
            <section className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden">
                <img
                    src={heroBg}
                    alt="Kapoor Electronics showroom interior"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
                <div className="container relative z-10 py-16 md:py-24">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight max-w-2xl animate-fade-in">
                        Kapoor Electronics — Trusted Electronics Store in Abu Road
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-primary-foreground/80 max-w-xl animate-fade-in" style={{ animationDelay: "0.15s" }}>
                        Home delivery available · Reliable after-sales service · Wide range of electronics for your home
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        <a
                            href="tel:09782435235"
                            className="inline-flex items-center gap-2 rounded-lg bg-gradient-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-elevated transition hover:opacity-90"
                        >
                            <Phone className="h-4 w-4" /> Call Now / कॉल करें
                        </a>
                        <a
                            href="https://www.google.com/maps?q=Abu+Road+Rajasthan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-foreground/10"
                        >
                            <MapPin className="h-4 w-4" /> Get Directions / दिशा-निर्देश
                        </a>
                        <Link
                            to="/contact#enquiry"
                            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-foreground/10"
                        >
                            <MessageSquare className="h-4 w-4" /> Product Enquiry / पूछताछ
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust bar */}
            <section className="bg-card border-b border-border">
                <div className="container py-4 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" /> 4.2 Rating
                    </span>
                    <span className="hidden sm:inline text-border">|</span>
                    <span>67 Google Reviews</span>
                    <span className="hidden sm:inline text-border">|</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Abu Road, Rajasthan</span>
                </div>
            </section>

            {/* Categories */}
            <section className="container py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Shop by Category</h2>
                <p className="text-center text-muted-foreground mb-10 text-sm">Browse our product range · Contact for latest availability</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map(({ icon: Icon, label }) => (
                        <Link
                            to="/products"
                            key={label}
                            className="group flex flex-col items-center gap-3 rounded-xl bg-card p-6 shadow-card border border-border transition hover:shadow-elevated hover:border-accent/40"
                        >
                            <div className="rounded-full bg-secondary p-4 transition group-hover:bg-accent/10">
                                <Icon className="h-7 w-7 text-accent" />
                            </div>
                            <span className="text-sm font-medium text-center text-foreground">{label}</span>
                        </Link>
                    ))}
                </div>
                <p className="text-center text-xs text-muted-foreground mt-4 italic">Edit categories — these are placeholders</p>
            </section>

            {/* Why Choose Us */}
            <section className="bg-card border-y border-border">
                <div className="container py-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Choose Kapoor Electronics?</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            { icon: Truck, title: "Home Delivery", desc: "Get your electronics delivered right to your doorstep in Abu Road and nearby areas." },
                            { icon: Zap, title: "Fast & Helpful Service", desc: "\"Best shop of electronic in aburoad they provide faster service to deliver their products.\" — Jatin Jaiswar" },
                            { icon: Headphones, title: "After-Sales Support", desc: "Reliable after-sales service to keep your electronics running perfectly." },
                        ].map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="rounded-xl border border-border bg-background p-6 shadow-card">
                                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                                    <Icon className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Offers */}
            <section className="container py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Featured Offers</h2>
                <p className="text-center text-muted-foreground mb-10 text-sm">Check back for the latest deals and promotions</p>
                <div className="grid sm:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-xl border border-dashed border-border bg-card p-8 text-center shadow-card">
                            <div className="rounded-full bg-secondary w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl text-muted-foreground">%</span>
                            </div>
                            <h3 className="font-semibold mb-1">Offer {i}</h3>
                            <p className="text-sm text-muted-foreground">To be confirmed</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-card border-y border-border">
                <div className="container py-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">What Our Customers Say</h2>
                    <p className="text-center text-muted-foreground mb-10 text-sm">Based on 67 Google reviews</p>

                    <div className="max-w-lg mx-auto rounded-xl border border-border bg-background p-6 shadow-card">
                        <div className="flex gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-accent text-accent" : "text-border"}`} />
                            ))}
                        </div>
                        <blockquote className="text-sm text-foreground leading-relaxed italic mb-3">
                            "Best shop of electronic in aburoad they provide faster service to deliver their products"
                        </blockquote>
                        <p className="text-xs text-muted-foreground font-medium">— Dhruv Prajapati</p>
                    </div>

                    <div className="text-center mt-6">
                        <Link to="/reviews" className="text-sm font-medium text-accent hover:underline">
                            View more reviews →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Index;
