import Hero from "@/components/Hero";
import Section from "@/components/Section";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Calendar, UserCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Admissions",
    description: "Join Anupam Takshashila Vidyapith. Check admission procedure, eligibility, and required documents.",
};

export default function Admissions() {
    return (
        <>
            <Hero
                title="Join Our Family"
                subtitle="Begin your journey of excellence with Anupam Takshashila Vidyapith."
                backgroundImage="https://images.unsplash.com/photo-1427504743055-e9ba6345005e?q=80&w=2674&auto=format&fit=crop"
                primaryAction={{ label: "Contact Us", href: "/contact" }}
            />

            <Section title="Admission Process">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--color-background-light)', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                            <div style={{ padding: '1rem', background: 'white', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                <FileText size={32} />
                            </div>
                        </div>
                        <h3>1. Registration</h3>
                        <p>Obtain the registration form from the school office or download it online. Submit the filled form with required details.</p>
                    </div>

                    <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--color-background-light)', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                            <div style={{ padding: '1rem', background: 'white', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                <Calendar size={32} />
                            </div>
                        </div>
                        <h3>2. Assessment</h3>
                        <p>Students may be required to appear for a written assessment or interaction, depending on the grade applied for.</p>
                    </div>

                    <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--color-background-light)', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                            <div style={{ padding: '1rem', background: 'white', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                <UserCheck size={32} />
                            </div>
                        </div>
                        <h3>3. Confirmation</h3>
                        <p>Successful candidates will be notified. Admission is confirmed upon payment of fees and submission of documents.</p>
                    </div>
                </div>
            </Section>

            <Section background="light" title="Documents Required">
                <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '8px' }}>
                    <ul style={{ listStyle: 'disc', paddingLeft: '2rem', lineHeight: '2' }}>
                        <li>Birth Certificate (original/attested copy).</li>
                        <li>Transfer Certificate (TC) from the previous school (if applicable).</li>
                        <li>Passport size photographs of the student and parents.</li>
                        <li>Aadhar Card copy of the student and parents.</li>
                        <li>Report card/Mark sheet of the previous class.</li>
                    </ul>
                </div>
            </Section>

            <Section title="Fee Structure">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <p>Please contact the school office for the detailed fee structure for the current academic session.</p>
                    <div style={{ marginTop: '2rem' }}>
                        <Link href="/contact" className="btn btn-primary">Enquire Now</Link>
                    </div>
                </div>
            </Section>
        </>
    );
}
