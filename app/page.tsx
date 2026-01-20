import Hero from "@/components/Hero";
import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";
import { BookOpen, Users, Activity, Trophy } from "lucide-react";
import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Anupam Takshashila Vidyapith in Nirmali, Supaul. A center of excellence for holistic education.",
};

export default function Home() {
  return (
    <>
      <Hero
        title="Welcome to Anupam Takshashila Vidyapith"
        subtitle="Empowering minds, shaping futures. The premier educational institution in Nirmali, Supaul, Bihar."
        // Using a placeholder gradient since we don't have images yet, but ideally would be a school photo.
        // Or we can use a solid color fallback which Hero handles.
        primaryAction={{ label: "Admissions Open", href: "/admissions" }}
        secondaryAction={{ label: "Our Philosophy", href: "/about" }}
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" // Education generic image
      />

      <Section
        title="Why Choose ATV?"
        subtitle="At Anupam Takshashila Vidyapith, we believe in education that goes beyond textbooks."
      >
        <div className={styles.grid}>
          <InfoCard
            icon={<BookOpen size={24} />}
            title="Academic Excellence"
            description="A rigorous curriculum designed to foster critical thinking and intellectual growth."
            link="/academics"
          />
          <InfoCard
            icon={<Users size={24} />}
            title="Experienced Faculty"
            description="Dedicated teachers who mentor and guide students to achieve their full potential."
            link="/faculty"
          />
          <InfoCard
            icon={<Activity size={24} />}
            title="Holistic Development"
            description="Sports, arts, and cultural activities ensuring well-rounded personality development."
            link="/facilities"
          />
          <InfoCard
            icon={<Trophy size={24} />}
            title="Proven Track Record"
            description="Consistently producing top results in district and state level examinations."
            link="/about"
          />
        </div>
      </Section>

      <Section background="light" title="Principal's Message">
        <div className={styles.messageContent}>
          <div className={styles.imagePlaceholder}>
            {/* Placeholder for Principal's Image */}
            <div style={{ width: '100%', height: '100%', background: '#ddd', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Principal&apos;s Photo
            </div>
          </div>
          <div className={styles.textContent}>
            <blockquote className={styles.quote}>
              &quot;Education is not the filling of a pail, but the lighting of a fire. At Anupam Takshashila Vidyapith, we strive to ignite that fire in every student.&quot;
            </blockquote>
            <p>
              Our mission is to provide a safe, nurturing environment where students can explore their interests and develop the skills needed for the 21st century. We are proud to serve the community of Nirmali and Supaul.
            </p>
            <cite className={styles.cite}>- Principal, Anupam Takshashila Vidyapith</cite>
            <br />
            <Link href="/about" className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</Link>
          </div>
        </div>
      </Section>

      <Section title="Latest News & Events">
        <div className={styles.newsGrid}>
          <div className={styles.newsItem}>
            <span className={styles.date}>Jan 15, 2026</span>
            <h3>Annual Sports Day Announced</h3>
            <p>Get ready for the biggest sports event of the year...</p>
            <Link href="/news">Read more</Link>
          </div>
          <div className={styles.newsItem}>
            <span className={styles.date}>Jan 10, 2026</span>
            <h3>Admissions Open for 2026-27</h3>
            <p>We are now accepting applications for the new academic session...</p>
            <Link href="/admissions">Apply Now</Link>
          </div>
          <div className={styles.newsItem}>
            <span className={styles.date}>Dec 20, 2025</span>
            <h3>Science Exhibition Winners</h3>
            <p>Congratulations to our students for winning the district level science exhibition...</p>
            <Link href="/news">Read more</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
