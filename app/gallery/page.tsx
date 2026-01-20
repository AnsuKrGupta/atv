import Hero from "@/components/Hero";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery",
    description: "Glimpses of life at Anupam Takshashila Vidyapith.",
};

const images = [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2670&auto=format&fit=crop", // Library
    "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2574&auto=format&fit=crop", // Lab
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop", // Classroom
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop", // Teacher
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2632&auto=format&fit=crop", // Kids
    "https://images.unsplash.com/photo-1427504743055-e9ba6345005e?q=80&w=2674&auto=format&fit=crop", // School
];

export default function Gallery() {
    return (
        <>
            <Hero
                title="Photo Gallery"
                subtitle="Capturing moments of learning and joy."
            />

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {images.map((src, index) => (
                        <div key={index} style={{ height: '250px', overflow: 'hidden', borderRadius: '8px' }}>
                            <img src={src} alt={`Gallery Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} className="hover:scale-110" />
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
