import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Anupam Takshashila Vidyapith, Nirmali. Address, phone number, and location map.",
};

export default function Contact() {
    return (
        <>
            <Hero
                title="Contact Us"
                subtitle="We are here to answer your questions."
                backgroundImage="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2574&auto=format&fit=crop"
            />

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '2rem' }}>Get in Touch</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <MapPin color="var(--color-primary)" />
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Address</h4>
                                    <p>Anupam Takshashila Vidyapith,<br />Ward No. 12, Nirmali, Supaul,<br />Bihar, India - 847452</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Phone color="var(--color-primary)" />
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Phone</h4>
                                    <p>+91 9934423861</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Mail color="var(--color-primary)" />
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Email</h4>
                                    <p>info@anupamtakshashila.com</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Clock color="var(--color-primary)" />
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Office Hours</h4>
                                    <p>Monday - Saturday: 8:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div style={{ width: '100%', height: '300px', background: '#eee', borderRadius: '8px', overflow: 'hidden' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14332.123456789!2d86.5!3d26.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE4JzAwLjAiTiA4NsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="School Location"
                            ></iframe>
                        </div>
                    </div>

                    <div>
                        <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '2rem' }}>Send us a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </Section>
        </>
    );
}
