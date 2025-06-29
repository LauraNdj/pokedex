// src/pages/Home/Home.jsx
import { useEffect, useState } from 'react';
import { getAllPokemons } from '@/api/pokemons';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import styles from './Home.module.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [ok, setOk]           = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons().then(({ ok, data }) => {
      setOk(ok);
      setPokemons(data || []);   // data = null si échec
      setLoading(false);
    });
  }, []);

  /* 1. loader */
  if (loading) return <p>Chargement…</p>;

  /* 2. erreur réseau */
  if (!ok) return <p style={{ color: 'red' }}>Erreur : impossible de récupérer les Pokémon.</p>;

  /* 3. liste vide (rare ici) */
  if (pokemons.length === 0) return <p>Aucun Pokémon trouvé.</p>;

  /* 4. affichage normal */
  return (
    <div className={styles.grid}>
        {pokemons.map((p) => (
            <PokemonCard key={p.id} pokemon={p} />
        ))}
    </div>
  );
};

export default Home;
