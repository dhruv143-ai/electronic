import { Phone, MapPin, Clock, Share2 } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

const Contact = () => (
    <main className="pb-20 md:pb-0">
        <section className="bg-gradient-navy text-primary-foreground py-16">
            <div className="container">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Contact Us</h1>
                <p className="text-primary-foreground/70">We're here to help — call, visit, or send an enquiry</p>
            </div>
        </section>

        <section className="container py-16">
            <div className="grid lg:grid-cols-2 gap-10">
                {/* Info */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Store Information</h2>
                        <div className="space-y-4">
                            <a href="tel:09782435235" className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card hover:shadow-elevated transition">
                                <div className="rounded-full bg-accent/10 w-10 h-10 flex items-center justify-center shrink-0">
                                    <Phone className="h-5 w-5 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">097824 35235</p>
                                    <p className="text-xs text-muted-foreground">Tap to call / कॉल करें</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
                                <div className="rounded-full bg-accent/10 w-10 h-10 flex items-center justify-center shrink-0">
                                    <MapPin className="h-5 w-5 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">Naya Kheda, Abu Road, Rajasthan 307026</p>
                                    <p className="text-xs text-muted-foreground">Plus code: FQCF+FH Abu Road, Rajasthan</p>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=FQCF%2BFH+Abu+Road+Rajasthan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-accent font-medium hover:underline mt-1 inline-block"
                                    >
                                        Open in Google Maps →
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
                                <div className="rounded-full bg-accent/10 w-10 h-10 flex items-center justify-center shrink-0">
                                    <Clock className="h-5 w-5 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">Closes 9:00 PM</p>
                                    <p className="text-xs text-muted-foreground">Call for opening hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map embed */}
                    <div className="rounded-xl overflow-hidden border border-border shadow-card">
                        <iframe
                            title="Kapoor Electronics Location"
                            src="https://www.google.com/maps?q=FQCF%2BFH+Abu+Road+Rajasthan&output=embed"
                            className="w-full h-64"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Share */}
                    <div className="flex gap-3">
                        <button
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground border border-border rounded-lg px-4 py-2 hover:bg-secondary transition"
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({ title: "Kapoor Electronics", text: "Kapoor Electronics, Abu Road", url: window.location.href });
                                }
                            }}
                            aria-label="Share this page"
                        >
                            <Share2 className="h-4 w-4" /> Share
                        </button>
                    </div>
                </div>

                {/* Enquiry Form */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Product Enquiry / पूछताछ</h2>
                    <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                        <EnquiryForm />
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default Contact;
