// src/components/Header/Header.jsx
import { Link } from 'react-router';
import { ROUTES } from '@/constants/routes';
import styles from './Header.module.css';

/* Display app logo and redirect to home page when clicked on. */
const Header = () => (
  <header className={styles.header}>
    <Link to={ROUTES.HOME} className={styles.logo}>
      Pokédex
    </Link>
  </header>
);

export default Header;
