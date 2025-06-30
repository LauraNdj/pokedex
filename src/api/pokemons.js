// src/api/pokemons.js
const API_BASE = import.meta.env.VITE_API_URL;

/**
 * GET /pokemons
 */
export async function getAllPokemons() {
  try {
    const res  = await fetch(`${API_BASE}/pokemons`);
    const data = await res.json();
    return { ok: true, data };        // succès
  } catch (error) {
    console.error('getAllPokemons', error);
    return { ok: false, data: [] };   // échec : tableau vide
  }
}

/**
 * GET /pokemons/:id
 */
export async function getPokemon(id) {
  try {
    const res  = await fetch(`${API_BASE}/pokemons/${id}`);
    const data = await res.json();
    return { ok: true, data };
  } catch (error) {
    console.error('getPokemon', error);
    return { ok: false, data: null };
  }
}

/**
 * PATCH like +1
 */
export async function likePokemon(id, newLikeCount) {
  try {
    const res  = await fetch(`${API_BASE}/pokemons/${id}`, {
      method : 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body   : JSON.stringify({ like: newLikeCount }),
    });
    const data = await res.json();
    return { ok: true, data };
  } catch (error) {
    console.error('likePokemon', error);
    return { ok: false, data: null };
  }
}
