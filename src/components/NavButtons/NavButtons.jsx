import { Link } from 'react-router';
import styles from './NavButtons.module.css';

/**
 * Navigation buttons for previous and next items.
 *
 * - The "Prev" button is always rendered; it appears disabled if there is no previous item.
 * - The "Next" button is rendered only when a next item exists.
 */
export default function NavButtons({ current, total, basePath = '/pokemon/' }) {
    const hasPrev = current > 1;
    const hasNext = current < total;

    const prevId = current - 1;
    const nextId = current + 1;

    return (
        <nav className={styles.wrapper}>
            {/* --- PREVIOUS --- */}
            {hasPrev ? (
                <Link to={`${basePath}${prevId}`} className={styles.btn}>
                    ←
                </Link>
            ) : (
                // Disabled button for consistent width when no previous item exists
                <span className={`${styles.btn} ${styles.disabled}`}>←</span>
            )}

            {/* --- NEXT (rendered only if available) --- */}
            {hasNext && (
                <Link to={`${basePath}${nextId}`} className={styles.btn}>
                    →
                </Link>
            )}
        </nav>
    );
}
