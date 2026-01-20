import type { Metadata } from "next";
// import { Inter } from "next/font/google"; // Can use google fonts if allowed to fetch, or rely on system fonts as per globals.css fallback. 
// Given the prompt asks for specific fonts "Inter, Roboto or Outfit", I will add Google Fonts via next/font 
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Anupam Takshashila Vidyapith",
    default: "Anupam Takshashila Vidyapith - Excellence in Education",
  },
  description: "Anupam Takshashila Vidyapith in Nirmali, Supaul, Bihar is a premier educational institution committed to holistic student development.",
  keywords: ["School in Nirmali", "Anupam Takshashila Vidyapith", "Best School in Supaul", "Bihar Education", "Holistic Education"],
  openGraph: {
    title: "Anupam Takshashila Vidyapith",
    description: "Nurturing the leaders of tomorrow in Nirmali, Supaul.",
    type: "website",
    locale: "en_IN",
    siteName: "Anupam Takshashila Vidyapith",
  }
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              "name": "Anupam Takshashila Vidyapith",
              "url": "https://anupamtakshashila.com", // Placeholder URL
              "logo": "https://anupamtakshashila.com/logo.png", // Placeholder
              "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
              "description": "Anupam Takshashila Vidyapith is a premier educational institution in Nirmali, Supaul, Bihar, offering holistic education.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ward No. 12",
                "addressLocality": "Nirmali",
                "addressRegion": "Bihar",
                "postalCode": "847452",
                "addressCountry": "IN"
              },
              "telephone": "+919934423861",
              "email": "info@anupamtakshashila.com"
            }),
          }}
        />
      </body>
    </html>
  );
}
