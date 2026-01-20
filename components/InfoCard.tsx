import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./InfoCard.module.css";

interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link?: string;
}

export default function InfoCard({ icon, title, description, link }: InfoCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            {link && (
                <Link href={link} className={styles.link}>
                    Learn more <ArrowRight size={16} />
                </Link>
            )}
        </div>
    );
}
