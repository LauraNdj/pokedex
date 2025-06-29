import { useState } from 'react';
import styles      from './SearchBar.module.css';
import PokemonCard from '@/components/PokemonCard/PokemonCard';

export default function SearchBar({ pokemons }) {
  const [term, setTerm] = useState('');


  const t = term.toLowerCase().trim();
  const filtered = pokemons.filter((p) =>
    !t ||
    p.name.toLowerCase().includes(t) ||
    p.types.some((type) => type.toLowerCase().includes(t))
  );

  return (
    <>
      <input
        className={styles.input}
        placeholder="Search Pokémon…"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p>
          Aucun résultat pour « <strong>{term}</strong> »
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
