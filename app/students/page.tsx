import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Download, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Students Corner",
    description: "Resources, timetable, and study material for students.",
};

export default function Students() {
    return (
        <>
            <Hero
                title="Students Corner"
                subtitle="Your hub for resources and updates."
                backgroundImage="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop"
            />

            <Section title="Student Resources">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
                        <h3><Download size={20} style={{ display: 'inline', marginRight: '0.5rem' }} /> Downloads</h3>
                        <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><Link href="#" style={{ color: 'var(--color-primary)' }}>Class Timetable 2025-26</Link></li>
                            <li><Link href="#" style={{ color: 'var(--color-primary)' }}>Syllabus (All Classes)</Link></li>
                            <li><Link href="#" style={{ color: 'var(--color-primary)' }}>Holiday List</Link></li>
                        </ul>
                    </div>

                    <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
                        <h3><ExternalLink size={20} style={{ display: 'inline', marginRight: '0.5rem' }} /> Important Links</h3>
                        <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><Link href="#" style={{ color: 'var(--color-primary)' }}>Online Result Portal</Link></li>
                            <li><Link href="#" style={{ color: 'var(--color-primary)' }}>E-Library Access</Link></li>
                        </ul>
                    </div>
                </div>
            </Section>
        </>
    );
}
