import Hero from "@/components/Hero";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about the history, vision, and mission of Anupam Takshashila Vidyapith, Nirmali.",
};

export default function About() {
    return (
        <>
            <Hero
                title="About Our School"
                subtitle="A legacy of educational excellence in Nirmali, Supaul."
                backgroundImage="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2574&auto=format&fit=crop"
            />

            <Section title="Our History">
                <p style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                    Established with the vision of bringing world-class education to the heart of Bihar,
                    Anupam Takshashila Vidyapith started its journey in Nirmali, Supaul.
                    Over the years, we have grown from a modest beginning to become a premier institution
                    known for academic excellence and holistic development.
                </p>
                <p style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem' }}>
                    Our name, inspired by the ancient university of Takshashila, relects our commitment
                    to preserving Indian values while embracing modern scientific temper.
                </p>
            </Section>

            <Section background="light" title="Vision & Mission">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div style={{ padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Our Vision</h3>
                        <p>
                            To create a vibrant community of lifelong learners who are responsible citizens,
                            critical thinkers, and leaders serving the nation and the world with compassion and integrity.
                        </p>
                    </div>
                    <div style={{ padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Our Mission</h3>
                        <p>
                            We are committed to providing a safe and stimulating environment where each child
                            can explore their potential. We aim to foster academic excellence, physical fitness,
                            and strong moral values through a balanced curriculum.
                        </p>
                    </div>
                </div>
            </Section>

            <Section title="Leadership">
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                        Under the guidance of our visionary management and experienced Principal,
                        Anupam Takshashila Vidyapith continues to scale new heights.
                    </p>
                    {/* Add Management/Principal cards here if details provided */}
                </div>
            </Section>
        </>
    );
}
