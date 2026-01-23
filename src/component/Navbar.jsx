import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

// Navigation items used for both desktop and mobile menus
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    // Tracks whether the page has been scrolled (used for navbar styling)
    const [isScrolled, setIsScrolled] = useState(false);

    // Tracks whether the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Runs once when the component mounts
    useEffect(() => {
        // Callback that checks scroll position
        const handleScroll = () => {
            // If the user scrolls more than 10px, mark navbar as "scrolled"
            setIsScrolled(window.screenY > 10);
        };

        // Attach scroll listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup listener when component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            // Navbar styles change depending on scroll state
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                    : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo / Brand */}
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Olivia </span>{" "}
                        Portfolio
                    </span>
                </a>

                {/* Desktop navigation (hidden on mobile) */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile menu toggle button */}
                <button
                    // Toggles menu open/close
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {/* Show close icon if open, menu icon if closed */}
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile full-screen menu overlay */}
                <div
                    className={cn(
                        // Full-screen overlay
                        "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                        // Animation + mobile-only visibility
                        "transition-all duration-300 md:hidden",
                        // Enable or disable visibility & interaction
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                // Close menu when a link is clicked
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
