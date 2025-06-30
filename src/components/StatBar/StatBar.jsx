// StatBar.jsx: Displays a labeled progress bar based on a stat's current value versus its maximum.
import styles from './StatBar.module.css';
import { MAX_STAT } from '@/constants/maxStats';

// Mapping from stat label to key in MAX_STAT
const labelToKey = {
  'hp': 'hp',
  'attack': 'attack',
  'defense': 'defense',
  'special attack': 'specialAttack',
  'special defense': 'specialDefense',
  'speed': 'speed',
};

export default function StatBar({ label, value }) {
  // Retrieve the key based on the case-insensitive label
  const key = labelToKey[label.toLowerCase()];
  // Get the maximum stat value or default to 100 if not defined
  const max = MAX_STAT[key] ?? 100;
  // Calculate the percentage width for the bar based on the current value
  const pct = Math.min(100, Math.round((value / max) * 100));

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
