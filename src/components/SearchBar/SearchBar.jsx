import { useState } from 'react';
import styles      from './SearchBar.module.css';
import PokemonCard from '@/components/PokemonCard/PokemonCard';

/*
  SearchBar Component:
  - Displays an input field to search Pokémon by name or type.
  - Filters the provided list of pokemons based on the search term.
  - Renders a message when no matches are found, or displays the matching Pokémon cards.
*/
export default function SearchBar({ pokemons }) {
  const [term, setTerm] = useState('');

  // Prepare the search term in lowercase and trim any extra white spaces.
  const t = term.toLowerCase().trim();
  // Filter the pokemons list based on the search term (by name or type).
  const filtered = pokemons.filter((p) =>
    !t ||
    p.name.toLowerCase().includes(t) ||
    p.types.some((type) => type.toLowerCase().includes(t))
  );

  return (
    <>
      <input
        className={styles.input}
        placeholder="Search Pokémon by name or type..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p>
          No results for &laquo; <strong>{term}</strong> &raquo;
        </p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((p) => (
            <PokemonCard key={p.id} pokemon={p} />
          ))}
        </div>
      )}
    </>
  );
}
