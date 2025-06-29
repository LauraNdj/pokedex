import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import styles from './PokemonDetail.module.css';
import { getPokemon, likePokemon } from '@/api/pokemons';
import { getReviewsByPokemon } from '@/api/reviews';
import Badge from '@/components/Badge/Badge';
import StatBar from '@/components/StatBar/StatBar';
import Reviews from '@/components/Reviews/Reviews';

export default function PokemonDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [ok, setOk]           = useState(true);
  const [pkmn, setPkmn]       = useState(null);
  const [reviews, setReviews] = useState([]);

  /* fetch pokémon + reviews */
  useEffect(() => {
    Promise.all([getPokemon(id), getReviewsByPokemon(id)]).then(
      ([pRes, rRes]) => {
        setOk(pRes.ok && rRes.ok);
        setPkmn(pRes.data);
        setReviews(rRes.data || []);
        setLoading(false);
      },
    );
  }, [id]);

  /* like handler */
  const handleLike = async () => {
    const { ok, data } = await likePokemon(id, pkmn.like + 1);
    if (ok) setPkmn(data);
  };

  /* add review callback */
  const handleNewReview = (rev) => setReviews((prev) => [...prev, rev]);

  /* UI states */
  if (loading) return <p>Loading…</p>;
  if (!ok || !pkmn) return <p style={{ color: 'red' }}>Error loading data.</p>;

  /* img URL */
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pkmn.id}.svg`;

  return (
    <article className={styles.wrapper}>
      <header>
        <img src={img} alt={pkmn.name} />
        <h1>{pkmn.name}</h1>

        <div>
          {pkmn.types.map((t) => (
            <Badge key={t} type={t} />
          ))}
        </div>

        <button onClick={handleLike} className={styles.likeBtn}>
          ❤️ {pkmn.like}
        </button>
      </header>

      <section>
        <h3>Stats</h3>
        {Object.entries(pkmn.base).map(([label, value]) => (
          <StatBar
            key={label}
            label={label}
            value={value}
          />
        ))}
      </section>

      <Reviews
        pokemonId={id}
        reviews={reviews}
        onNew={handleNewReview}
      />
    </article>
  );
}
