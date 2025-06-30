import styles from './Badge.module.css';
import { PKMN_TYPES } from '@/constants/pkmnTypes';

/**
 * Badge component displays a label with a background color defined by a Pokémon type.
 *
 * It receives a 'type' prop and checks for a matching type in the PKMN_TYPES array to determine the background color.
 * If no match is found, it defaults the color to '#777'.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.type - The type name used to set the badge's background color.
 * @returns {JSX.Element} A span element styled as a badge.
 */
export default function Badge({ type }) {
  const color = PKMN_TYPES.find((t) => t.name.toLowerCase() === type.toLowerCase())?.color ?? '#777';
  return (
    <span className={styles.badge} style={{ backgroundColor: color }}>
      {type}
    </span>
  );
}
