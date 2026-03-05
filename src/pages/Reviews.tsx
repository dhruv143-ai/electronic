import { Star } from "lucide-react";

const snippets = [
    { text: "Home Delivery, And the Best electronics showroom outlet.", author: "Google Review" },
    { text: "Nice after sales service", author: "Google Review" },
    { text: "Best shop of electronic in aburoad they provide faster service to deliver their products", author: "Jatin Jaiswar" },
];

const Reviews = () => (
    <main className="pb-20 md:pb-0">
        <section className="bg-gradient-navy text-primary-foreground py-16">
            <div className="container text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Customer Reviews</h1>
                <div className="flex items-center justify-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-6 w-6 ${i < 4 ? "fill-accent text-accent" : "text-primary-foreground/30"}`} />
                    ))}
                </div>
                <p className="text-2xl font-bold">4.2 <span className="text-base font-normal text-primary-foreground/70">/ 5</span></p>
                <p className="text-sm text-primary-foreground/60 mt-1">Based on 67 Google reviews</p>
            </div>
        </section>

        <section className="container py-16">
            <h2 className="text-xl font-bold mb-6">Review Highlights</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {snippets.map(({ text, author }, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-card">
                        <div className="flex gap-0.5 mb-3">
                            {[...Array(5)].map((_, j) => (
                                <Star key={j} className={`h-3.5 w-3.5 ${j < 4 ? "fill-accent text-accent" : "text-border"}`} />
                            ))}
                        </div>
                        <p className="text-sm text-foreground italic leading-relaxed mb-3">"{text}"</p>
                        <p className="text-xs text-muted-foreground font-medium">— {author}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="container pb-16">
            <h2 className="text-xl font-bold mb-4">All Feedback</h2>
            <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                        <Star key={j} className={`h-3.5 w-3.5 ${j < 2 ? "fill-accent text-accent" : "text-border"}`} />
                    ))}
                </div>
                <p className="text-sm text-foreground italic leading-relaxed mb-3">"Bakvas and high cost price all product not buy it"</p>
                <p className="text-xs text-muted-foreground font-medium">— Google Review</p>
            </div>
        </section>

        <section className="container pb-16 text-center">
            <button
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-card hover:opacity-90 transition"
                aria-label="Write a review (opens in new tab)"
                onClick={() => window.open("https://search.google.com/local/writereview?placeid=", "_blank")}
            >
                Write a Review ✍️
            </button>
            <p className="text-xs text-muted-foreground mt-2">You'll be redirected to Google Reviews</p>
        </section>
    </main>
);

export default Reviews;
