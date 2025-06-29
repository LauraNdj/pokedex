import { Link } from 'react-router';
import styles from './PokemonCard.module.css';
import Badge from '@/components/Badge/Badge';
import { ROUTES } from '@/constants/routes';

export default function PokemonCard({ pokemon }) {
  const { id, name, types } = pokemon;
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <Link to={ROUTES.DETAILS(id)} className={styles.card}>
      <img src={imgUrl} alt={name} className={styles.img} />
      <h3>{name}</h3>
      <div>
        {types.map((t) => (
          <Badge key={t} type={t} />
        ))}
      </div>
    </Link>
  );
}
