
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Services", path: "/services" },
    { label: "Reviews", path: "/reviews" },
    { label: "Contact", path: "/contact" },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
            <div className="container flex h-16 items-center justify-between">
                <Link to="/" className="flex flex-col leading-tight" aria-label="Kapoor Electronics Home">
                    <span className="text-lg font-extrabold text-foreground">Kapoor Electronics</span>
                    <span className="text-[11px] text-muted-foreground">कपूर इलेक्ट्रॉनिक्स</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
                    {navItems.map((n) => (
                        <Link
                            key={n.path}
                            to={n.path}
                            className={`text-sm font-medium transition-colors hover:text-accent ${pathname === n.path ? "text-accent" : "text-muted-foreground"}`}
                        >
                            {n.label}
                        </Link>
                    ))}
                    <a
                        href="tel:09782435235"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-card transition hover:opacity-90"
                        aria-label="Call Kapoor Electronics"
                    >
                        <Phone className="h-4 w-4" /> Call Now
                    </a>
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile nav */}
            {open && (
                <nav className="md:hidden border-t border-border bg-card pb-4" aria-label="Mobile navigation">
                    {navItems.map((n) => (
                        <Link
                            key={n.path}
                            to={n.path}
                            onClick={() => setOpen(false)}
                            className={`block px-6 py-3 text-sm font-medium transition-colors ${pathname === n.path ? "text-accent bg-secondary" : "text-foreground"}`}
                        >
                            {n.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
