import styles from './Badge.module.css';
import { PKMN_TYPES } from '@/constants/pkmnTypes';

export default function Badge({ type }) {
  const color = PKMN_TYPES.find((t) => t.name.toLowerCase() === type.toLowerCase())?.color ?? '#777';
  return (
    <span className={styles.badge} style={{ backgroundColor: color }}>
      {type}
    </span>
  );
}
