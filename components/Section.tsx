import styles from "./Section.module.css";

interface SectionProps {
    children: React.ReactNode;
    background?: 'white' | 'light';
    title?: string;
    subtitle?: string;
    id?: string;
}

export default function Section({
    children,
    background = 'white',
    title,
    subtitle,
    id
}: SectionProps) {
    return (
        <section
            id={id}
            className={`${styles.section} ${background === 'light' ? styles.bgLight : styles.bgWhite}`}
        >
            <div className="container">
                {(title || subtitle) && (
                    <div className={styles.headingWrapper}>
                        {title && <h2 className={styles.title}>{title}</h2>}
                        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
