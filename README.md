## Pokédex – Front-end ECF (CEFIM)

> **Stack** : Vite + React 18 (JS), React-Router, CSS Modules, json-server (fake API)

Ce petit Pokédex affiche les 151 premiers Pokémon, permet de filtrer par nom ou type, d’accéder à une fiche détaillée avec statistiques, likes et avis utilisateurs.

---

### Sommaire

1. [Prérequis](#prérequis)
2. [Installation](#installation)
3. [Lancement en mode développement](#lancement-en-mode-développement)
4. [Scripts disponibles](#scripts-disponibles)
5. [Structure du projet](#structure-du-projet)
6. [Variables d’environnement](#variables-denvironnement)
7. [Convention de commits](#convention-de-commits)
8. [Crédits](#crédits)

---

### Prérequis

| Outil       | Version conseillée     |
| ----------- | ---------------------- |
| **Node JS** | ≥ 18.17 (LTS)          |
| **npm**     | ≥ 9 (fourni avec Node) |
| **git**     | ≥ 2.30                 |

> Vérifie :
> `node -v` · `npm -v` · `git --version`

---

### Installation

```bash
# 1) Cloner le dépôt
git clone git@github.com:LauraNdj/pokedex.git
cd pokedex

# 2) Installer les dépendances du front
npm install
```

> ⚠️ Les *node\_modules* ne sont **pas** suivis par git ; il faut donc toujours exécuter `npm install` après un clone ou un `git pull`.

---

### Lancement en mode développement

Ouvre **deux** terminaux :

```bash
# TERMINAL 1 – Front (port 3000)
npm run dev

# TERMINAL 2 – Fake API json-server (port 3001)
npm run server
```

* Front : [http://localhost:3000](http://localhost:3000)
* API   : [http://localhost:3001/pokemons](http://localhost:3001/pokemons)

Le front recharge automatiquement à chaque sauvegarde (`HMR`).

---

### Scripts disponibles

| Script                       | Rôle                                                                                |
| ---------------------------- | ----------------------------------------------------------------------------------- |
| `npm run dev`                | Lance Vite en mode développement (port 3000).                                       |
| `npm run build`              | Build optimisé dans `dist/` (production).                                           |
| `npm run preview`            | Prévisualise le build (`dist/`) sur [http://localhost:4173](http://localhost:4173). |
| `npm run server`             | Démarre **json-server** sur le port 3001 avec `db.json`.                            |

---

### Structure du projet

```
pokedex/
├─ public/                 # éventuels assets publics
├─ src/
│  ├─ api/                 # appel réseau pur (fetch)
│  ├─ assets/logos/        # pokeball.png, pokedex.png, …
│  ├─ components/          # Header, SearchBar, Badge, …
│  │   └─ …/…module.css    # styles locaux (CSS Modules)
│  ├─ constants/           # PKMN_TYPES, MAX_STAT, ROUTES
│  ├─ pages/               # Home, PokemonDetail, NotFound
│  ├─ utils/               # helpers divers
│  ├─ App.jsx
│  └─ main.jsx
├─ db.json                 # base de données json-server
├─ .env                    # variables d’environnement front
├─ vite.config.js          # alias @ → /src
└─ README.md
```

---

### Variables d’environnement

```ini
# .env
VITE_API_BASE=http://localhost:3001          # racine de l’API
VITE_IMG_BASE=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world
```

* **Important** : toute variable utilisée côté client doit **commencer par `VITE_`** pour être injectée dans le bundle.
* Après modification d’un `.env`, redémarre `npm run dev`.

---

### Convention de commits

Le projet suit **Conventional Commits** (`feat:`, `fix:`, `chore:`…).
Exemples :

```
feat(search): add type filtering
fix(detail): prevent NaN in StatBar
chore(env): move image base URL to .env
```

Cela facilite les revues, le changelog et les releases automatisées.

---

### Crédits

* **Sprites** : *PokéAPI* – [https://pokeapi.co](https://pokeapi.co)
* **Icons & logos** : The Pokémon Company (usage éducatif)
* **React + Vite** : MIT License
* **json-server** : MIT License

Projet réalisé dans le cadre de l’ECF *DWWM – Front-end* (CEFIM).
