import { Phone, MapPin, MessageSquare } from "lucide-react";

const MobileCTABar = () => (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-border bg-card shadow-elevated">
        <div className="grid grid-cols-3">
            <a
                href="tel:09782435235"
                className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground transition hover:bg-secondary"
                aria-label="Call Kapoor Electronics"
            >
                <Phone className="h-5 w-5 text-accent" />
                <span>Call / कॉल</span>
            </a>
            <a
                href="https://www.google.com/maps/search/?api=1&query=FQCF%2BFH+Abu+Road+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground transition hover:bg-secondary border-x border-border"
                aria-label="Get directions to Kapoor Electronics"
            >
                <MapPin className="h-5 w-5 text-accent" />
                <span>Directions / दिशा</span>
            </a>
            <a
                href="/contact#enquiry"
                className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground transition hover:bg-secondary"
                aria-label="Product Enquiry"
            >
                <MessageSquare className="h-5 w-5 text-accent" />
                <span>Enquiry / पूछताछ</span>
            </a>
        </div>
    </div>
);

export default MobileCTABar;
