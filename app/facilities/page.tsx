import Hero from "@/components/Hero";
import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";
import type { Metadata } from "next";
import { Monitor, FlaskConical, Bus, Library, Dumbbell, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Facilities",
    description: "State-of-the-art infrastructure at Anupam Takshashila Vidyapith including labs, library, and transport.",
};

export default function Facilities() {
    return (
        <>
            <Hero
                title="Our Facilities"
                subtitle="Creating an environment conducive to learning and growth."
                backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop"
            />

            <Section title="Infrastructure">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <InfoCard
                        icon={<Library size={24} />}
                        title="Library"
                        description="A well-stocked library with a vast collection of books, journals, and digital resources to encourage reading habits."
                    />
                    <InfoCard
                        icon={<FlaskConical size={24} />}
                        title="Science Labs"
                        description="Fully equipped Physics, Chemistry, and Biology laboratories for practical learning and experimentation."
                    />
                    <InfoCard
                        icon={<Monitor size={24} />}
                        title="Computer Lab"
                        description="Modern computer lab with high-speed internet to ensure digital literacy for all students."
                    />
                    <InfoCard
                        icon={<Dumbbell size={24} />}
                        title="Sports Complex"
                        description="Spacious playground and facilities for various sports like cricket, football, volleyball, and badminton."
                    />
                    <InfoCard
                        icon={<Bus size={24} />}
                        title="Transport"
                        description="Safe and reliable transport facility covering Nirmali, Supaul and surrounding areas."
                    />
                    <InfoCard
                        icon={<ShieldCheck size={24} />}
                        title="Safety & Security"
                        description="CCTV surveillance and trained security staff to ensure a safe campus environment."
                    />
                </div>
            </Section>
        </>
    );
}
