import "./App.css";
import Menu from "./components/Menu";
import Inicio from "./page/Inicio";
import Sobre_Mim from "./page/Sobre Mim";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="sobremim" element={<Sobre_Mim />} />
          <Route path="*" element={<h1>Pagina não encontrada!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
