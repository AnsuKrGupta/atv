"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, School } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Facilities", href: "/facilities" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContext}`}>
                <Link href="/" className={styles.logo}>
                    <School size={32} color="var(--color-accent)" />
                    <div>
                        Anupam <span className={styles.logoSpan}>Takshashila</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className={styles.desktopMenu}>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className={styles.navLink}>
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <nav className={styles.mobileMenu}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={styles.navLink}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
