import Hero from "@/components/Hero";
import Section from "@/components/Section";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "News & Events",
    description: "Stay updated with the latest news, events, and announcements from Anupam Takshashila Vidyapith.",
};

const newsItems = [
    { id: 1, title: "Annual Sports Day 2026", date: "Jan 15, 2026", excerpt: "The Annual Sports Day will be held on 25th January. All students are requested to register for events." },
    { id: 2, title: "Admissions Open for Session 2026-27", date: "Jan 10, 2026", excerpt: "Admission forms for the upcoming academic session are now available at the school office." },
    { id: 3, title: "Science Exhibition Winners", date: "Dec 20, 2025", excerpt: "Our students bagged the first prize in the district level science exhibition held in Supaul." },
    { id: 4, title: "Winter Vacation Notice", date: "Dec 15, 2025", excerpt: "The school will remain closed for winter vacation from Dec 25th to Jan 5th." },
];

export default function News() {
    return (
        <>
            <Hero
                title="News & Events"
                subtitle="Happenings at Anupam Takshashila Vidyapith."
                backgroundImage="https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=2694&auto=format&fit=crop"
            />

            <Section>
                <div style={{ display: 'grid', gap: '2rem' }}>
                    {newsItems.map((item) => (
                        <article key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem', border: '1px solid #eee', borderRadius: '8px', background: 'white' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                                <Calendar size={16} />
                                <time>{item.date}</time>
                            </div>
                            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)' }}>{item.title}</h2>
                            <p>{item.excerpt}</p>
                            <Link href={`#`} style={{ color: 'var(--color-primary)', fontWeight: '500', marginTop: 'auto' }}>Read Details &rarr;</Link>
                        </article>
                    ))}
                </div>
            </Section>
        </>
    );
}
