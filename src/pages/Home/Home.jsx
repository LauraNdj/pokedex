// src/pages/Home/Home.jsx
import { useEffect, useState } from 'react';
import { getAllPokemons } from '@/api/pokemons';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import styles from './Home.module.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [ok, setOk]           = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getAllPokemons().then(({ ok, data }) => {
      setOk(ok);
      setPokemons(data || []); 
      setLoading(false);
    });
  }, []);
  

  /* 1. loader */
  if (loading) return <p>Chargement…</p>;

  /* 2. erreur réseau */
  if (!ok) return <p style={{ color: 'red' }}>Erreur : impossible de récupérer les Pokémon.</p>;

  /* 3. liste vide */
  if (pokemons.length === 0) return <p>Aucun Pokémon trouvé.</p>;

  /* 4. affichage normal */
  return (
    <main className={styles.main}>
        <SearchBar pokemons={pokemons} />
      </main>
  );
};

export default Home;
