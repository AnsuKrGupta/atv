import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3>Anupam Takshashila Vidyapith</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            Nurturing minds and building character in the heart of Supaul.
                            Excellence in education since establishment.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h3>Quick Links</h3>
                        <ul className={styles.linkList}>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/admissions">Admissions</Link></li>
                            <li><Link href="/academics">Academics</Link></li>
                            <li><Link href="/news">News & Events</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Contact Us</h3>
                        <div className={styles.contactInfo}>
                            <p>
                                <MapPin size={18} color="var(--color-accent)" />
                                Nirmali, Supaul, Bihar, India
                            </p>
                            <p>
                                <Phone size={18} color="var(--color-accent)" />
                                +91 9934423861
                            </p>
                            <p>
                                <Mail size={18} color="var(--color-accent)" />
                                info@anupamtakshashila.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>&copy; {new Date().getFullYear()} Anupam Takshashila Vidyapith. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
