// PokemonCard component displays basic information of a Pokemon in a card format.
import { Link } from 'react-router';
import styles from './PokemonCard.module.css';
import Badge from '@/components/Badge/Badge';
import { ROUTES } from '@/routes/routes';

export default function PokemonCard({ pokemon }) {
  const { id, name, types } = pokemon;
  // Build image URL based on Pokemon id
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    // Clicking this link navigates to the Pokemon details page.
    <Link to={ROUTES.DETAILS(id)} className={styles.card}>
      {/* Display Pokemon image */}
      <img src={imgUrl} alt={name} className={styles.img} />
      {/* Display Pokemon name */}
      <h3>{name}</h3>
      <div>
        {/* Render a badge for each Pokemon type */}
        {types.map((t) => (
          <Badge key={t} type={t} />
        ))}
      </div>
    </Link>
  );
}
