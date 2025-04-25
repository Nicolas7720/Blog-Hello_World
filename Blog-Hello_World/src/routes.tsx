import "./App.css";
import Menu from "./components/Menu";
import PaginaPadrao from "./components/PaginaPadrao";
import Rodape from "./components/Rodape";
import ScrollToTop from "./components/ScrollToTop";
import Inicio from "./page/Inicio";
import NaoEncontrada from "./page/NaoEncontrada";
import Post from "./page/Post";
import Sobre_Mim from "./page/Sobre Mim";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route path="/" element={<Inicio />} />
            <Route path="sobremim" element={<Sobre_Mim />} />
          </Route>
          <Route path="posts/:id" element={<Post />} />

          {/* Na rota "/", a estrutura a ser renderizada é:
          
          
            <PaginaPadrao>
              <Inicio/>
            </PaginaPadrao>

          {/* Na rota "/sobremim", a estrutura a ser renderizada é:
          
          
            <PaginaPadrao>
              <SobreMim/>
            </PaginaPadrao>
          */}

          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
