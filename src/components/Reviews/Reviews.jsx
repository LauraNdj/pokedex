import { useState } from 'react';
import styles from './Reviews.module.css';
import { addReview } from '@/api/reviews';

export default function Reviews({ pokemonId, reviews, onNew }) {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    if (!text.trim()) return;
    const { ok, data } = await addReview({ pokemonId, content: text.trim() });
    if (ok) onNew(data);
    setText('');
  };

  return (
    <section className={styles.wrapper}>
      <h3>Reviews</h3>

      <ul className={styles.list}>
        {reviews.map((r) => (
          <li key={r.id}>
            <strong>{r.author}:</strong> {r.content}
          </li>
        ))}
      </ul>

      <input
        className={styles.input}
        placeholder="Add a review… (ENTER)"
        maxLength={100}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
    </section>
  );
}
