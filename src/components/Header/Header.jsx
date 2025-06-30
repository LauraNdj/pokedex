// Header.jsx
import { Link } from 'react-router';
import { ROUTES } from '@/routes/routes';

import pokeball from '@/assets/logos/pokeball.png';
import wordmark from '@/assets/logos/pokedex.png';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={ROUTES.HOME} className={styles.link}>
          <img src={pokeball} alt=""        className={styles.icon}     />
          <img src={wordmark} alt="Pokédex" className={styles.wordmark} />
        </Link>
      </div>
    </header>
  );
}
