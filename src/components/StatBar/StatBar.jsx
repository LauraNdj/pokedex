import styles from './StatBar.module.css';
import { MAX_STAT } from '@/constants/maxStats';

/* One coloured progress bar for a single stat */
export default function StatBar({ label, value }) {
  const max = MAX_STAT[label.toLowerCase()];
  const pct = Math.round((value / max) * 100);

  return (
    <div className={styles.line}>
      <span className={styles.label}>{label}</span>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${pct}%` }} />
      </div>
      <span className={styles.value}>{value}</span>
    </div>
  );
}
