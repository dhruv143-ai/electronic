import { Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
    <footer className="bg-gradient-navy text-primary-foreground">
        <div className="container py-12 grid gap-8 md:grid-cols-3">
            <div>
                <h3 className="text-lg font-bold mb-1">Kapoor Electronics</h3>
                <p className="text-sm opacity-70 mb-4">कपूर इलेक्ट्रॉनिक्स</p>
                <p className="text-sm opacity-80 leading-relaxed">
                    Your trusted electronics store in Abu Road, Rajasthan. Home delivery available.
                </p>
            </div>

            <div>
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <nav className="flex flex-col gap-2 text-sm opacity-80" aria-label="Footer navigation">
                    <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
                    <Link to="/products" className="hover:opacity-100 transition-opacity">Products</Link>
                    <Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link>
                    <Link to="/reviews" className="hover:opacity-100 transition-opacity">Reviews</Link>
                    <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
                </nav>
            </div>

            <div className="space-y-3 text-sm">
                <h4 className="font-semibold mb-3">Store Info</h4>
                <p className="flex items-start gap-2 opacity-80">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                    Naya Kheda, Abu Road, Rajasthan 307026
                </p>
                <a href="tel:09782435235" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                    <Phone className="h-4 w-4 shrink-0" />
                    097824 35235
                </a>
                <p className="flex items-center gap-2 opacity-80">
                    <Clock className="h-4 w-4 shrink-0" />
                    Closes 9:00 PM · Call for opening hours
                </p>
            </div>
        </div>

        <div className="border-t border-primary-foreground/10">
            <div className="container py-4 text-center text-xs opacity-50">
                © {new Date().getFullYear()} Kapoor Electronics. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;
