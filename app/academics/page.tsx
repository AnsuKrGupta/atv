import Hero from "@/components/Hero";
import Section from "@/components/Section";
import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Academics",
    description: "Explore the academic curriculum, teaching methodology, and assessment system at Anupam Takshashila Vidyapith.",
};

export default function Academics() {
    return (
        <>
            <Hero
                title="Academics"
                subtitle="Fostering intellectual curiosity and academic rigor."
                backgroundImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2632&auto=format&fit=crop"
            />

            <Section title="Curriculum">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        Our curriculum is designed to challenge and inspire students. We follow a comprehensive
                        approach that integrates scholastic and co-scholastic areas. We are aligned with the
                        National Education Policy (NEP) 2020, focusing on experiential learning and critical thinking.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {['Primary Wing (Nursery to Class 5)', 'Middle Wing (Class 6 to 8)', 'Secondary Wing (Class 9 & 10)'].map((item, index) => (
                            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '1.1rem', padding: '1rem', background: 'var(--color-background-light)', borderRadius: '8px' }}>
                                <CheckCircle color="var(--color-primary)" size={20} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            <Section background="light" title="Teaching Methodology">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '8px' }}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Interactive Learning</h3>
                        <p>Classrooms are equipped with modern teaching aids to make learning immersive and engaging.</p>
                    </div>
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '8px' }}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Personalized Attention</h3>
                        <p>With an optimal student-teacher ratio, we ensure every child gets the attention they deserve.</p>
                    </div>
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '8px' }}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Continuous Assessment</h3>
                        <p>Regular evaluations help track progress and identify areas for improvement early on.</p>
                    </div>
                </div>
            </Section>
        </>
    );
}
