// src/pages/Home/Home.jsx
import { useEffect, useState } from 'react';
import { getAllPokemons } from '@/api/pokemons';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import styles from './Home.module.css';

/*
  Home component: This component fetches a list of Pokémon and displays a SearchBar.
  It handles loading state, network errors, and empty lists.
*/
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [ok, setOk] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch all Pokémon when the component mounts
  useEffect(() => {
    getAllPokemons().then(({ ok, data }) => {
      setOk(ok);
      setPokemons(data || []);
      setLoading(false);
    });
  }, []);

  // 1. Loading state: display a loader
  if (loading) return <p>Loading…</p>;

  // 2. Network error: display an error message in red text
  if (!ok)
    return (
      <p style={{ color: 'red' }}>
        Error: Unable to retrieve Pokémon data.
      </p>
    );

  // 3. Empty list: display a message when no Pokémon are found
  if (pokemons.length === 0) return <p>No Pokémon found.</p>;

  // 4. Normal display: render the SearchBar and Pokémon list
  return (
    <main className={styles.main}>
      <SearchBar pokemons={pokemons} />
      {/* Example: Uncomment below if you want to display each Pokémon using the PokemonCard component */}
      {/* {pokemons.map((pokemon) => (
           <PokemonCard key={pokemon.id} pokemon={pokemon} />
         ))} */}
    </main>
  );
};

export default Home;
