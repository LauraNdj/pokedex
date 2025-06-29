import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail";
import NotFound from "./pages/NotFound/NotFound";
import { ROUTES } from "./routes/routes";
import Header from "./components/Header/Header";



function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.DETAILS()} element={<PokemonDetail />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
