import { createBrowserRouter } from 'react-router';
import Home from '@/pages/Home/Home';
import PokemonDetail from '@/pages/PokemonDetail/PokemonDetail';
import NotFound from '@/pages/NotFound/NotFound';
import { ROUTES } from '@/constants/routes';

export const router = createBrowserRouter([
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.DETAIL, element: <PokemonDetail /> },
  { path: ROUTES.NOT_FOUND, element: <NotFound /> },
]);
