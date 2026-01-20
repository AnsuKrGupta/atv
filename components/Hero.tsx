import Link from "next/link";
import styles from "./Hero.module.css";

interface HeroProps {
    title: string;
    subtitle: string;
    backgroundImage?: string;
    primaryAction?: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
}

export default function Hero({
    title,
    subtitle,
    backgroundImage,
    primaryAction,
    secondaryAction
}: HeroProps) {
    return (
        <section
            className={styles.hero}
            style={backgroundImage ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            } : undefined}
        >
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>

                <div className={styles.actions}>
                    {primaryAction && (
                        <Link href={primaryAction.href} className="btn btn-primary">
                            {primaryAction.label}
                        </Link>
                    )}
                    {secondaryAction && (
                        <Link href={secondaryAction.href} className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
                            {secondaryAction.label}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
