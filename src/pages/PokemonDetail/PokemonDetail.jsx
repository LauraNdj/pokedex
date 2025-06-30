import { useParams } from 'react-router'; 
import { useEffect, useState } from 'react';

import { getPokemon, likePokemon } from '@/api/pokemons';
import { getReviewsByPokemon } from '@/api/reviews';

import Badge from '@/components/Badge/Badge';
import StatBar from '@/components/StatBar/StatBar';
import Reviews from '@/components/Reviews/Reviews';
import NavButtons from '@/components/NavButtons/NavButtons';

import styles from './PokemonDetail.module.css';

/**
 * PokemonDetail component fetches and displays details for a specific Pokémon, along with its reviews.
 *
 * It retrieves the Pokémon ID from the URL, fetches the Pokémon data and its reviews from the API,
 * and handles loading and error states. It also provides functionality to like the Pokémon and add new reviews.
 */
export default function PokemonDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [ok, setOk] = useState(true);
  const [pkmn, setPkmn] = useState(null);
  const [reviews, setReviews] = useState([]);

  // Fetch Pokémon details and reviews concurrently
  useEffect(() => {
    Promise.all([getPokemon(id), getReviewsByPokemon(id)]).then(
      ([pRes, rRes]) => {
        setOk(pRes.ok && rRes.ok);
        setPkmn(pRes.data);
        setReviews(rRes.data || []);
        setLoading(false);
      }
    );
  }, [id]);

  if (loading) return <p>Loading…</p>;
  if (!ok || !pkmn) return <p style={{ color: 'red' }}>Error loading data.</p>;

  const img = `${import.meta.env.VITE_IMG_BASE}/${pkmn.id}.svg`;

  // Handle the like button click event
  const handleLike = async () => {
    const { ok, data } = await likePokemon(id, pkmn.like + 1);
    if (ok) setPkmn(data);
  };

  // Callback for when a new review is added
  const handleNewReview = (rev) => setReviews((prev) => [...prev, rev]);

  return (
    <article className={styles.wrapper}>
      {/* Navigation, image, and information section */}
      <header className={styles.top}>
        {/* Navigation buttons */}
        <NavButtons current={Number(id)} total={151} basePath="/pokemon/" />

        {/* Pokémon image */}
        <img src={img} alt={pkmn.name} className={styles.img} />

        {/* Text block and action buttons */}
        <div className={styles.info}>
          <h1>{pkmn.name}</h1>

          {/* Badges and like button on the same row */}
          <div className={styles.row}>
            <div className={styles.badges}>
              {pkmn.types.map((t) => (
                <Badge key={t} type={t} />
              ))}
            </div>

            <button onClick={handleLike} className={styles.likeBtn}>
              ❤️ {pkmn.like}
            </button>
          </div>
        </div>
      </header>

      {/* Stats section */}
      <section>
        <h3>Stats</h3>

        <div className={styles.stats}>
          {Object.entries(pkmn.base).map(([label, value]) => (
            <StatBar key={label} label={label} value={value} />
          ))}
        </div>
      </section>

      {/* Reviews section */}
      <Reviews
        pokemonId={id}
        reviews={reviews}
        onNew={handleNewReview}
      />
    </article>
  );
}
