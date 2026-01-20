import Hero from "@/components/Hero";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Faculty & Staff",
    description: "Meet the dedicated team of educators at Anupam Takshashila Vidyapith.",
};

const staff = [
    { name: "Dr. A.K. Gupta", role: "Principal", qual: "PhD in Education", img: "" },
    { name: "Mrs. S. Singh", role: "Vice Principal", qual: "M.Sc, B.Ed", img: "" },
    { name: "Mr. R. Kumar", role: "Science Head", qual: "M.Sc Physics", img: "" },
    { name: "Ms. P. Sharma", role: "Mathematics Head", qual: "M.Sc Maths", img: "" },
    { name: "Mr. V. Yadav", role: "Sports In-charge", qual: "B.P.Ed", img: "" },
    { name: "Mrs. M. Das", role: "Primary Coordinator", qual: "M.A. English", img: "" },
];

export default function Faculty() {
    return (
        <>
            <Hero
                title="Our Faculty"
                subtitle="Mentors, guides, and role models for the next generation."
                backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop"
            />

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {staff.map((member, index) => (
                        <div key={index} style={{ textAlign: 'center', padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', transition: 'transform 0.2s', background: 'white' }}>
                            <div style={{ width: '120px', height: '120px', background: '#ddd', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#888' }}>
                                {member.name.charAt(0)}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                            <p style={{ color: 'var(--color-primary)', fontWeight: '600', marginBottom: '0.25rem' }}>{member.role}</p>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>{member.qual}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
