// src/api/reviews.js
const API_BASE = import.meta.env.VITE_API_URL;

/**
 * GET /reviews/?pokemonId=…
 */
export async function getReviewsByPokemon(pokemonId) {
  try {
    const res  = await fetch(`${API_BASE}/reviews/?pokemonId=${pokemonId}`);
    const data = await res.json();
    return { ok: true, data };
  } catch (error) {
    console.error('getReviewsByPokemon', error);
    return { ok: false, data: [] };
  }
}

/**
 * POST /reviews
 */
export async function addReview({ pokemonId, author = 'Me', content }) {
  try {
    const res  = await fetch(`${API_BASE}/reviews`, {
      method : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body   : JSON.stringify({ pokemonId, author, content }),
    });
    const data = await res.json();     
    return { ok: true, data };
  } catch (error) {
    console.error('addReview', error);
    return { ok: false, data: null };
  }
}
