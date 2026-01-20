import Hero from "@/components/Hero";
import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";
import type { Metadata } from "next";
import { User, FileText, CreditCard } from "lucide-react";

export const metadata: Metadata = {
    title: "Parents Corner",
    description: "Information and resources for parents.",
};

export default function Parents() {
    return (
        <>
            <Hero
                title="Parents Corner"
                subtitle="Partners in your child's education."
                backgroundImage="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2574&auto=format&fit=crop"
            />

            <Section title="Parent Resources">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <InfoCard
                        icon={<User size={24} />}
                        title="Parent Portal"
                        description="Login to view your child's attendance, marks, and remarks from teachers."
                        link="#"
                    />
                    <InfoCard
                        icon={<FileText size={24} />}
                        title="Handbook & Guidelines"
                        description="Download the parents handbook and school policies."
                        link="#"
                    />
                    <InfoCard
                        icon={<CreditCard size={24} />}
                        title="Fee Payment"
                        description="Pay school fees online securely via our payment gateway."
                        link="#"
                    />
                </div>
            </Section>
        </>
    );
}
