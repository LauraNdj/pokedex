// src/components/StatBar/StatBar.jsx
import styles from './StatBar.module.css';
import { MAX_STAT } from '@/constants/maxStats';

const labelToKey = {
  'hp': 'hp',
  'attack': 'attack',
  'defense': 'defense',
  'special attack': 'specialAttack',
  'special defense': 'specialDefense',
  'speed': 'speed',
};

export default function StatBar({ label, value }) {
  const key = labelToKey[label.toLowerCase()];
  const max = MAX_STAT[key] ?? 100;
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
